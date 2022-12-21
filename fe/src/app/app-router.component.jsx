import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./app-component"
import NoteDetail from "./notes/notes-detail.component"
import Notes from "./notes/notes.component"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/notes" element={<App />}>
          <Route index element={<Notes />} />
          <Route path=":noteId" element={<NoteDetail />} />
        </Route>
        <Route path="/login" element={<div>login</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
