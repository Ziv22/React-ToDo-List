import mongoose    from "mongoose"

const Schema = mongoose.Schema

const toDoSchema = new Schema({
    id:             String, 
    title:          String, 
    description:    String, 
    priority:       Number,
    isdone:         Boolean
})

const ToDo = mongoose.model("ToDoSchema", toDoSchema)

export default ToDo