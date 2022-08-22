import { Router } from "express"

const router = Router()

router.get('/test-route', (req, res) => {
    res.json({
        contend: "My first route"
    })
})

export default router