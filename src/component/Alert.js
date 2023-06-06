

export default function Alert(props) {
    const capatalize =(word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
     props.alertMessage && <div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show`} role="alert">
        <strong>{capatalize(props.alertMessage.type)}</strong>:{props.alertMessage.msg}
    </div>
  )
}
