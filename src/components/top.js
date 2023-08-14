import '../styles/top.css'

export default function Top() {

    return (
      <div onClick={()=>window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })} className="topBtn">
            <span className="hidden">맨 위로</span>
      </div>
    );
  }
