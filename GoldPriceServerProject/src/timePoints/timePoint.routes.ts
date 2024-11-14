import express, {Request, Response} from "express"
import { TimePoint, UnitTimePoint } from "./timePoint.interface"
import * as database from "./timePoint.database"
import {StatusCodes} from "http-status-codes"

export const timePointRouter = express.Router()

timePointRouter.get('/timePoints', async (req : any, res : any) => {
    try {
       const allTimePoints = await database.findAll()

       if (!allTimePoints) {
        return res.status(StatusCodes.NOT_FOUND).json({error : `No timePoints found!`})
       }

       return res.status(StatusCodes.OK).json({total : allTimePoints.length, allTimePoints})
    } catch (error) {
       return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error}) 
    }
})

timePointRouter.get("/timePoint/:id", async (req : any, res : any) => {
    try {
        const timePoint = await database.findOne(req.params.id)

        if (!timePoint) {
            return res.status(StatusCodes.NOT_FOUND).json({error : "TimePoint does not exist"})
        }

        return res.status(StatusCodes.OK).json({timePoint})
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
})


timePointRouter.post("/timePoint", async (req : any, res : any) => {
    try {
        const {date, timestamp, goldPricerice, silverPrice, platiniumPrice, palladiumPrice} = req.body

        if (!date || !timestamp || !goldPricerice || !silverPrice || !platiniumPrice || !palladiumPrice) {
            return res.status(StatusCodes.BAD_REQUEST).json({error : `Please provide all the required parameters..`})
        }
        const newTimePoint = await database.create({...req.body})
        return res.status(StatusCodes.CREATED).json({newTimePoint})
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
})

timePointRouter.post("/newTimePoints", async (req : Request, res : any) => {
    try {
        const {latestTimestamp} = req.body

        if (!latestTimestamp) {
            return res.status(StatusCodes.BAD_REQUEST).json({error : `Please provide the latest timestamp`})
        }

        const allTimePoints = await database.findAll()

        function filterByTimestamp(whatToFiltr: TimePoint[], givenTimestamp: number): TimePoint[] {
            return allTimePoints.filter((timePoint) => timePoint.timestamp > latestTimestamp);
        }

        const newTimePoints = filterByTimestamp(allTimePoints, latestTimestamp);

        if (!newTimePoints) {
            return res.status(StatusCodes.NOT_FOUND).json({error : `No new timePoints found!`})
        }

        return res.status(StatusCodes.OK).json({total : newTimePoints.length, newTimePoints})
        
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
})

timePointRouter.put("/timePoint/:id", async (req : any, res : any) => {
    try {
        const id = req.params.id

        const newTimePoint = req.body

        const findTimePoint = await database.findOne(id)

        if (!findTimePoint) {
            return res.status(StatusCodes.NOT_FOUND).json({error : `TimePoint does not exist..`})
        }

        const updateTimePoint = await database.update(id, newTimePoint)

        return res.status(StatusCodes.OK).json({updateTimePoint})
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
})


timePointRouter.delete("/timePoint/:id", async (req : any, res : any) => {
    try {
        const getTimePoint = await database.findOne(req.params.id)

        if (!getTimePoint) {
            return res.status(StatusCodes.NOT_FOUND).json({error : `No timePoint with ID ${req.params.id}`})
        }

        await database.remove(req.params.id)

        return res.status(StatusCodes.OK).json({msg : `TimePoint deleted..`})

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }
})