import '../styles/alert.css'

export default function Alert({
    alertArea
}) {

    return (
      <div className="alert">
        <div className="alertInner">
            <p>Comming Soon</p>
            <button type="button" onClick={alertArea}>OK</button>
        </div>
      </div>
    );
  }
