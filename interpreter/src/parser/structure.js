import linkProgram from "./linker.js";
import parseProgramFile from "./parser.js";

/**
 * Generate a program 'structure' from an AST
 * @param {*} ast
 */
export default function structure(ast) {
  let program = {
    annotations: [],
    chains: {},
    rules: {},
    declarations : {}
  };

  findRulesAndChainInAST(ast, program);
  
  // parse the root of the ast to find declaration and annotations
  for (let item of ast) {

    if (item.type == 'declaration') {
      program.declarations[item.name] = item.value;
    }
    if (item.type == "enum") {
      program.declarations[item.name] = {
        type: "enum",
        properties: {

        }
      };

      for (let child of item.children) {
        program.declarations[item.name].properties[child.name] = child.properties;
      }

      delete item.name;
    }
    if (item.type == 'annotation') {
      delete item.type;
      program.annotations.push(item); 
    }
  }

  for (const chain of Object.values(program.chains)) {
    attachAnnotationToGoodScope(chain);
  //  removeLogicBlock(chain);
  }

  for (const rule of Object.values(program.rules)) {
    attachAnnotationToGoodScope(rule);
  }

  for (const chain of Object.values(program.chains)) {
    simplifyBlockPropertiesOperation(chain);
  }

  linkProgram(program, null);

  return program;
}

/**
 * Run the ast to find rules, and chain
 * @param {*} ast 
 * @param {*} program 
 */
function  findRulesAndChainInAST(ast, program) {

  for (let item of ast) {
    if (item.type === 'chain') {
      program.chains[item.name] = item;
      delete item.name;
    }
    if (item.type === 'rule') {
      program.rules[item.name] = item;
      delete item.name;
    }

    if (item.children) {
      findRulesAndChainInAST(item.children, program);
    }
  }
}

/*
** Remove annotations from the flow and attach them to the good scopes
*/
function attachAnnotationToGoodScope(scope) {

  let attachmentTarget = scope;
  for (let i = 0; scope.children && i < scope.children.length; ++i) {
    let item = scope.children[i];

    if (item.type == "annotation") {
      scope.children.splice(i--, 1);
      if (!attachmentTarget.annotations) {
        attachmentTarget.annotations = [];
      }
      attachmentTarget.annotations.push(item);
      continue;
    }
    if (item.type == "logic_block") {
      attachAnnotationToGoodScope(item);
    }

    if (item.type == "operation") {
      attachAnnotationToLeftHand(item);
    }
  }
}

function attachAnnotationToLeftHand(operation) {

  let attachmentTarget = operation;
  for (let i = 0; i < operation.children.length; ++i) {
    let item = operation.children[i];

    if (item.type == "annotation") {
      operation.children.splice(i--, 1);
      if (!attachmentTarget.annotations) {
        attachmentTarget.annotations = [];
      }
      attachmentTarget.annotations.push(item);
      continue;
    }

    if (item.type == "operation") {
      attachAnnotationToLeftHand(item);
    }

    if (item.type == "logic_block") {
      attachAnnotationToGoodScope(item);
    }

    attachmentTarget = item;
  }
}

// logic block is a parsing artefact and always have only one child
function removeLogicBlock(scope) {
  for (let i = 0; scope.children && i < scope.children.length; ++i) {
    let item = scope.children[i];
    // sanity check; check there is only on child
    if (item.type == "logic_block" && item.children.length == 1) {
      // Annotations
      if (item.annotations && item.annotations.length) {
        item.children[0].annotations = [...item.children[0].annotations || [], ...item.annotations];
      }
      scope.children[i] = item.children[0];
      item = scope.children[i];
    }

    if (item.children) {
      removeLogicBlock(item);
    }
    
  }
}



// try to find all properties Operation and simplify them
//
// Simplification 1:
// - Reorder the operands / sub operands so that they respect the operation priority :
// a + b * c => b * c + a
//
// Simplification 2:
// - if an operand  is of the same type of the current operation, and it is permited by the current operator, move the operand up and increase current operator arity
//
function simplifyBlockPropertiesOperation(scope) {
  for (let i = 0; scope.children && i < scope.children.length; ++i) {
    let item = scope.children[i];
   
    if (item.type == "block") {
      for (let propertyName in item.properties) {
        if (item.properties[propertyName].type == "operation") {
  //        reorderOperationToMatchPriority(item.properties[propertyName]);
            groupSimilarOperator(item.properties[propertyName])  
        }
      }
    }
    if (item.children) {
      simplifyBlockPropertiesOperation(item);
    }
    
  }
}


const OPERATOR_PRIORITY_GROUPS = [
  ["not"],
  ["percentOf"]
  ["and", "or"],
  ["multiply", "divide", "exponent"],
  ["add", "subtract"]
];

function reorderOperationToMatchPriority(operation) {



}

const aggregativeOperator = ["and", "or"];
function groupSimilarOperator(operation) {
  if (operation.children[0].value == "contract") {debugger}
  for (let i = 0; i < operation.children.length; ++i) {
    let operand = operation.children[i];
    if (operand.value == "contract") {
      debugger;
    }
    if (aggregativeOperator.indexOf(operation.operator) != -1 && operand.operator == operation.operator) {

      Array.prototype.splice.apply(operation.children, [i--, 1, ...operand.children]);
    } else {
      if (operand.type == "operation") {
        groupSimilarOperator(operand);
      }
    }
  }

  operation.arity = operation.children.length;
}
