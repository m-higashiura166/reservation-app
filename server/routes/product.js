const express = require('express')
const router = express.Router()
const product = require('../model/product')

router.get('', async function(req, res) {
    foundProducts = await product.find({})
    return res.json(foundProducts)
})

router.get('/:productId', async function(req, res) {
    const productId = req.params.productId
    try {
        foundProducts = await product.findById(productId, {})
        return res.json(foundProducts)
    } catch (err) {
        return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
    }
})

module.exports = router