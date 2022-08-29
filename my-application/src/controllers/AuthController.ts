import { Response, Request } from 'express'

interface User {
    id?: string
    name: string
    email: string
    password: string
}

export class AuthContoller {
    public signUp = async (req: Request, res: Response) {
        const {name, email, password} = req.body

        const user = {name, email, password}

        
    }
}