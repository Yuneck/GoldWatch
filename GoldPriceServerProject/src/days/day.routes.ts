import express, {Request, Response} from "express"
import { Day, UnitDay } from "./day.interface"
import * as database from "./day.database"
import {StatusCodes} from "http-status-codes"

export const dayRouter = express.Router()

dayRouter.get('/days', async (req : any, res : any) => {
    try {
       const allDays = await database.findAll()

       if (!allDays) {
        return res.status(StatusCodes.NOT_FOUND).json({error : `No days found!`})
       }

       return res.status(StatusCodes.OK).json({total : allDays.length, allDays})
    } catch (error) {
       return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error}) 
    }
})

dayRouter.get("/day/:id", async (req : any, res : any) => {
    try {
        const day = await database.findOne(req.params.id)

        if (!day) {
            return res.status(StatusCodes.NOT_FOUND).json({error : "Day does not exist"})
        }

        return res.status(StatusCodes.OK).json({day})
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
})


dayRouter.post("/day", async (req : any, res : any) => {
    try {
        const {date, goldPricerice, silverPrice, platiniumPrice, palladiumPrice} = req.body

        if (!date || !goldPricerice || !silverPrice || !platiniumPrice || !palladiumPrice) {
            return res.status(StatusCodes.BAD_REQUEST).json({error : `Please provide all the required parameters..`})
        }
        const newDay = await database.create({...req.body})
        return res.status(StatusCodes.CREATED).json({newDay})
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
})

dayRouter.put("/day/:id", async (req : any, res : any) => {
    try {
        const id = req.params.id

        const newDay = req.body

        const findDay = await database.findOne(id)

        if (!findDay) {
            return res.status(StatusCodes.NOT_FOUND).json({error : `Day does not exist..`})
        }

        const updateDay = await database.update(id, newDay)

        return res.status(StatusCodes.OK).json({updateDay})
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
})


dayRouter.delete("/day/:id", async (req : any, res : any) => {
    try {
        const getDay = await database.findOne(req.params.id)

        if (!getDay) {
            return res.status(StatusCodes.NOT_FOUND).json({error : `No day with ID ${req.params.id}`})
        }

        await database.remove(req.params.id)

        return res.status(StatusCodes.OK).json({msg : `Day deleted..`})

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
})