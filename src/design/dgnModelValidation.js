'use strict'

// checks if the model is correct

const dgnMetamodel = require('./dgnSchema.js')
const printChatText = require('../helpers/printChatText.js')

module.exports = function moduleValidation (cy) {
  // valid component connections
  const thingArray = dgnMetamodel.thingArray
  const micronetArray = dgnMetamodel.micronetArray
  const netArray = dgnMetamodel.netArray
  const informationArray = dgnMetamodel.informationArray
  const actorArray = dgnMetamodel.actorArray
  const maliciousActorArray = dgnMetamodel.maliciousActorArray
  const assetArray = dgnMetamodel.assetArray
  const constraintArray = dgnMetamodel.constraintArray
  const threatArray = dgnMetamodel.threatArray
  const sensorArray = dgnMetamodel.sensorArray

  // decleration of arrays
  let result = '' // posted on the nodeInfo div
  let arrWrong = [] // stores wrong connection of nodes

  function componentValidation (cy, component, componentArray) {
    cy.nodes().map(node => {
      // checks if node is the desired component
      if (node.data().info.concept === component) {
        // stores the neighboring nodes of the component
        const neighborNodes = node.neighborhood().add(node)
        const neigborObject = neighborNodes.data().info.concept

        Object.keys(neigborObject).map(() => {
          // every neighbor node is added to the array arrWrong
          arrWrong.push(neigborObject)
          // if the neighbor is a valid connection it is removed from the array
          if (componentArray.includes(neigborObject) === true) {
            arrWrong.pop(neigborObject)
          }
        })
      }
    })

    result = `${arrWrong}`

    // if string not empty, show concepts with wrong connections
    if (result !== '') {
      result = `• ${component} has wrong connections`
      printChatText(result)
    }
  }

  componentValidation(cy, 'thing', thingArray)
  componentValidation(cy, 'micronet', micronetArray)
  componentValidation(cy, 'net', netArray)
  componentValidation(cy, 'information', informationArray)
  componentValidation(cy, 'actor', actorArray)
  componentValidation(cy, 'malicious actor', maliciousActorArray)
  componentValidation(cy, 'asset', assetArray)
  componentValidation(cy, 'constraint', constraintArray)
  componentValidation(cy, 'threat', threatArray)
  componentValidation(cy, 'sensor', sensorArray)

  // if string is empty, the model is correct
  if (result === '') {
    printChatText('model instance is valid\n👍')
  }
}
