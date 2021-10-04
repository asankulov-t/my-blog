import React from 'react';
import './write.css'
const Write = () => {
    return (
        <div className={'write'}>
            <img className={'postImg'} src="https://cdn.pixabay.com/photo/2021/07/18/17/43/lake-6476212_960_720.jpg" alt=""/>
            <form className={'writeForm'}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="fas fa-plus addIcon"></i>
                    </label>
                    <input type="file" id={'fileInput'} style={{display:'none'}}/>
                    <input className={'writeInput title'} type="text" placeholder={'title'} autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder={'Tell your history...'}
                              type={'text'}
                              className={'writeInput writeText'}></textarea>
                </div>
                <button className={'writeSubmit'}>
                    Publish
                </button>
            </form>
        </div>
    );
};

export default Write;