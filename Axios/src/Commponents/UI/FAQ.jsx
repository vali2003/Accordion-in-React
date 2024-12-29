
export const FAQ = ({curData,isActive, onToggle}) => {
    const {question, answer} = curData;
    

    return(
        <li>
              <div className="accordion-grid">
                   <p>{question}</p>
                   <button onClick={onToggle}                    
                   className={isActive ? "active-btn" : ""}
                   >{isActive ? "Close" : "Show"}
                   </button>
              </div>
              <p>{isActive && answer}</p>

                       </li>
    );
};
