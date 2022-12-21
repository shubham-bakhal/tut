import React from "react"
import axiosInstance from "../services/axios-instance"
import useNotesStore from "../store/notes.store"
import NoteList from "./notes-list.component"

const Notes = () => {
  const [title, setTitle] = React.useState("")
  const [content, setContent] = React.useState("")
  const addNote = useNotesStore(state => state.addNote)

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(title, content)

    try {
      const res = await axiosInstance.post("notes", { title, content })
      console.log(res)
      addNote(res.data)
    } catch (error) {
      console.log(error)
    }

    setContent("")
    setTitle("")
  }

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-8">
      <div className="flex justify-center items-center gap-6">
        <form action="" onSubmit={handleSubmit}>
          <input
            className="w-72 border-2  rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"
            value={title}
            onChange={e => {
              setTitle(e.target.value)
            }}
            placeholder="Enter a new Note"
          />
          <input
            className="w-72 border-2  rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"
            value={content}
            onChange={e => {
              setContent(e.target.value)
            }}
            placeholder="Enter a content for note"
          />
          <button
            type="submit"
            className="h-full px-5 py-2 bg-[#0264F6] text-white font-medium rounded-md"
          >
            Add Todo Item
          </button>
        </form>
      </div>

      <NoteList />
    </div>
  )
}

export default Notes
