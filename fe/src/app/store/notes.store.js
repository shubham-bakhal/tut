import produce from "immer"
import create from "zustand"
import { devtools, persist } from "zustand/middleware"

const useNotesStore = create(
  persist(
    devtools(
      set => ({
        notes: [],
        setNotes: data =>
          set(
            produce(state => {
              state.notes = data
            }),
            false,
            "notes/setNotes"
          ),
        addNote: note =>
          set(
            produce(state => {
              state.notes.push(note)
            }),
            false,
            "notes/addNote"
          ),
        deleteNote: id =>
          set(
            produce(state => {
              state.notes = state.notes.filter(note => note._id !== id)
            }),
            false,
            "notes/deleteNote"
          ),
      }),

      { name: "notes", serialize: { options: true } }
    ),
    {
      name: "notes", // unique name
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
)

export default useNotesStore
