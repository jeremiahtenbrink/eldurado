import React, {useEffect, useState} from "react";
import axios from 'axios';
import Line from "../line";
import DropDown from "../accounts/dropDown";
import parse from 'html-react-parser';

const Faq = () => {
  
  const [data, setData] = useState([]);
  
  const createQnA = (question, answer) => {
    return {question, answer};
  }
  
  useEffect(() => {
    axios.get("https://api.hubapi.com/hubdb/api/v2/tables/3409789/rows?portalId=494554")
      .then(res => {
        const faqs = [];
        const rows = res.data.objects;
        rows.forEach(row => {
          let question = row.values['2'];
          let answer = parse(row.values['3']);
          faqs.push(createQnA(question, answer));
        });
        setData(faqs);
      }).catch(err => {
      console.log(err);
    })
  }, [])
  
  
  return ( <div className='faq'>
    
    {data.map(question => {
      return (
        <Line>
          <DropDown name={question.question} list={[question.answer]}></DropDown>
        </Line>
      )
    })}
    </div> );
};

export default Faq;
