import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axiosInstance from "../services/axios-instance"
import useNotesStore from "../store/notes.store"

const NoteList = () => {
  const [notes, setNotes, deleteNote] = useNotesStore(state => [
    state.notes,
    state.setNotes,
    state.deleteNote,
  ])

  const nagivate = useNavigate()

  const handleDelete = async id => {
    try {
      const res = await axiosInstance.delete(`notes/${id}`, {
        data: { id: id },
      })
      console.log(res)
      deleteNote(id)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axiosInstance.get("notes")
        console.log(res)
        setNotes(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [setNotes])

  return (
    <div>
      <ul className="flex flex-col justify-center">
        {notes.map((note, index) => (
          <div
            key={index}
            className="flex justify-center mb-2 bg-red-300 p-4 cursor-pointer rounded-md"
            onClick={() => nagivate(`${note._id}`)}
          >
            <li>{`${note.title}  ======>  ${note.content}`}</li>
            <button
              className="p-2 ml-2 bg-white rounded-md"
              onClick={() => handleDelete(note._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default NoteList
