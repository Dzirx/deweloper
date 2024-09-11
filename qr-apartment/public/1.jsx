import React, { useState } from "react";
import ModalImage from "../../assets/apartment.jpg"

function Multi(){
    const [step, setSteps] = useState(1);

    function handlePrev(){
        if(step > 1 ) setSteps((step)=> step - 1);
    }
    function handlePrev(){
        if(step < 3 ) setSteps((step)=> step + 1);
    }
}

function Modal (){
    const [isOpen, setOpen] = useState(false);

    return(
        <>
            {isOpen ? (
            <Step1 setOpen={setOpen}/>
            ) : (
                <button className="btn-modal" onClick={()=> setOpen(true)}>Dodaj mieszkanie</button>
            )}
        </>
    );
}
function Step1({setOpen}) {
    return(
            <div className="modal_container">
                <div className="modal">
                    <div className="img">
                        <img src={ModalImage} alt=""/>
                        <p className="close" onClick={() => setOpen(false)}>X</p>
                    </div>           
                    <div className="content">
                        <h2>Uzupełnij formularz</h2>
                        <form>
                            <input type="text" placeholder="Tytuł ogłoszenia"/>
                            <input type="text" placeholder="Cena zł"/>
                            <input type="text" placeholder="Powierzchnia"/>
                            <input type="text" placeholder="Liczba pokoi"/>
                            <input type="text" placeholder="Rynek"/>
                            <div className="content-radio">
                                <p>Typ ogłoszenia</p>
                                    <label>
                                        <input type="radio" name="advertType" value="private" /> Prywatny
                                    </label>
                                    <br/>
                                    <label>
                                        <input type="radio" name="advertType" value="agency" /> Biuro nieruchomości
                                    </label>
                            </div>
                            <button>Następna strona</button>

                        </form>
                    </div>
                </div>
            </div>
    );
}


export default Modal;