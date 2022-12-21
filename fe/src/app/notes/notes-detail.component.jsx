import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosInstance from "../services/axios-instance"

const NoteDetail = () => {
  const { noteId } = useParams()

  const [note, setNote] = useState({})

  useEffect(() => {
    const getNoteData = async () => {
      try {
        const res = await axiosInstance.get(`notes/${noteId}`)
        console.log(res)
        setNote(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getNoteData()
  }, [noteId])

  return (
    <div className="flex justify-center mb-2 bg-red-300 p-4 cursor-pointer rounded-md">
      <li>{`${note.title}  ======>  ${note.content}`}</li>
    </div>
  )
}

export default NoteDetail
