import { Day, Days, UnitDay } from "./day.interface";
import { v4 as random } from "uuid";
import fs from "fs";

let days: Days = loadDays();

function loadDays(): Days {
  try {
    const data = fs.readFileSync("./days.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log(`Error ${error}`);
    return {};
  }
}

function saveDays() {
    try {
        fs.writeFileSync("./days.json", JSON.stringify(days), "utf-8");
        console.log("Days saved successfully!")
    } catch (error) {
        console.log("Error", error)
    }
}


export const findAll = async () : Promise<UnitDay[]> => Object.values(days)

export const findOne = async (id : string) : Promise<UnitDay> => days[id]

export const create = async (dayInfo : Day) : Promise<null | UnitDay> => {

    let id = random()

    let day = await findOne(id)

    while (day) {
        id = random ()
        await findOne(id)
    }

    days[id] = {
        id : id,
        ...dayInfo
    }

    saveDays()

    return days[id]
}

export const update = async (id : string, updateValues : Day) : Promise<UnitDay | null> => {

    const day = await findOne(id) 

    if (!day) {
        return null
    }

    days[id] = {
        id,
        ...updateValues
    }

    saveDays()

    return days[id]
}

export const remove = async (id : string) : Promise<null | void> => {

    const day = await findOne(id)

    if (!day) {
        return null
    }

    delete days[id]

    saveDays()

}