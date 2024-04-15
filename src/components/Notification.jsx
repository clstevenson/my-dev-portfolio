// Error component displays a notification message
// (if input field is empty or email is invalid)

export default function Notification({ message }) {
  return (
    <div className="box mt-2 notification is-info">
      <p className='is-size-5'> {message} </p>
    </div>
  )
};
