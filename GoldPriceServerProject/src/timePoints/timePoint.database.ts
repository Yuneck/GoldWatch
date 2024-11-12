import { TimePoint, TimePoints, UnitTimePoint } from "./timePoint.interface";
import { v4 as random } from "uuid";
import fs from "fs";

let timePoints: TimePoints = loadTimePoints();

function loadTimePoints(): TimePoints {
  try {
    const data = fs.readFileSync("./timePoints.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log(`Error ${error}`);
    return {};
  }
}

function saveTimePoints() {
    try {
        fs.writeFileSync("./timePoints.json", JSON.stringify(timePoints), "utf-8");
        console.log("TimePoints saved successfully!")
    } catch (error) {
        console.log("Error", error)
    }
}


export const findAll = async () : Promise<UnitTimePoint[]> => Object.values(timePoints)

export const findOne = async (id : string) : Promise<UnitTimePoint> => timePoints[id]

export const create = async (timePointInfo : TimePoint) : Promise<null | UnitTimePoint> => {

    let id = random()

    let timePoint = await findOne(id)

    while (timePoint) {
        id = random ()
        await findOne(id)
    }

    timePoints[id] = {
        id : id,
        ...timePointInfo
    }

    saveTimePoints()

    return timePoints[id]
}

export const update = async (id : string, updateValues : TimePoint) : Promise<UnitTimePoint | null> => {

    const timePoint = await findOne(id) 

    if (!timePoint) {
        return null
    }

    timePoints[id] = {
        id,
        ...updateValues
    }

    saveTimePoints()

    return timePoints[id]
}

export const remove = async (id : string) : Promise<null | void> => {

    const timePoint = await findOne(id)

    if (!timePoint) {
        return null
    }

    delete timePoints[id]

    saveTimePoints()

}