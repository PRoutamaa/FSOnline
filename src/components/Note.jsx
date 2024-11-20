/* eslint-disable react/prop-types */
const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'
  const liStyle =  {
      color: 'green',
      fontStyle: 'italic',
      fontSize: 16
    }
    return (
      <li style={liStyle}>
        {note.content}
        <button className='important' onClick={toggleImportance}>{label}</button>
      </li>
    )
  }

  export default Note