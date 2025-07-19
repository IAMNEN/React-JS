let name = 'Nen';
function Message() {
  return <div onClick={() => console.log("Message clicked")}>Hello {name}!</div>
}
export default Message