// assigns specific functions to each

// require design modules
const dgnModelValidation = require('./design/dgnModelValidation.js')
const dgnOverview = require('./design/dgnOverview.js')
const addDgnComponent = require('./design/addDgnComponent.js')
const addDgnEdge = require('./design/addDgnEdge.js')

// require design-state modules
const dgnStateModelValidation = require('./design-state/dgnStateModelValidation.js')
const dgnStateOverview = require('./design-state/dgnStateOverview.js')
const addDgnStateComponent = require('./design-state/addDgnStateComponent.js')
const addDgnStateEdge = require('./design-state/addDgnStateEdge.js')

// reguire implementation modules
const impModelValidation = require('./implementation/impModelValidation.js')
const impOverview = require('./implementation/impOverview.js')
const addImpComponent = require('./implementation/addImpComponent.js')
const addImpEdge = require('./implementation/addImpEdge.js')

// require implementation-state modules
const impStateModelValidation = require('./implementation-state/impStateModelValidation.js')
const impStateOverview = require('./implementation-state/impStateOverview.js')
const addImpStateComponent = require('./implementation-state/addImpStateComponent.js')
const addImpStateEdge = require('./implementation-state/addImpStateEdge.js')

// phases add component module
const addComponents = (cy, event, nodeCounter, phase) => {
  if (phase === 'design') {
    addDgnComponent(cy, event, nodeCounter)
  } else if (phase === 'design-state') {
    addDgnStateComponent(cy, event, nodeCounter)
  } else if (phase === 'implementation') {
    addImpComponent(cy, event, nodeCounter)
  } else if (phase === 'implementation-state') {
    addImpStateComponent(cy, event, nodeCounter)
  }
}

// phases add edge module
const addEdge = (cy, srcNode, trgNode, phase) => {
  if (phase === 'design') {
    addDgnEdge(cy, srcNode, trgNode)
  } else if (phase === 'design-state') {
    addDgnStateEdge(cy, srcNode, trgNode)
  } else if (phase === 'implementation') {
    addImpEdge(cy, srcNode, trgNode)
  } else if (phase === 'implementation-state') {
    addImpStateEdge(cy, srcNode, trgNode)
  }
}

// phases model validation
const validateHelper = (cy, phase) => {
  if (phase === 'design') {
    dgnModelValidation(cy)
  } else if (phase === 'design-state') {
    dgnStateModelValidation(cy)
  } else if (phase === 'implementation') {
    impModelValidation(cy)
  } else if (phase === 'implementation-state') {
    impStateModelValidation(cy)
  }
}

// phases model overview
const overviewHelper = (cy, phase) => {
  if (phase === 'design') {
    dgnOverview(cy)
  } else if (phase === 'design-state') {
    dgnStateOverview(cy)
  } else if (phase === 'implementation') {
    impOverview(cy)
  } else if (phase === 'implementation-state') {
    impStateOverview(cy)
  }
}

module.exports = {
  addComponents,
  addEdge,
  validateHelper,
  overviewHelper
}
