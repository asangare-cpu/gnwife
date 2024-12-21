import Footer from "../footer/Footer";
import Nav from "../navigation/Nav";
import FaqItem from "./FaqItem";

function Faq(){

  const faqs = [
    {question:"Where are you Located ?",
     answer : "Our team of editors work from Nigeria, Italy and France."
    },
    {question:"Is your company Officially registered ?",
      answer : "We are officially registered in Nigeria (Reg. no: 7834034) and are "+
      "working towards official registration in France and Italy as well."
    },
    {question:"How old is Gnwife Master Edits ?",
      answer : "We have had an unofficial presence since 2021 but officially flagged"+
      "off the company in 2024."
    },
    {question:"Where are you Located ?",
      answer : "Our team of editors work from Nigeria, Italy and France."
     },
    {
      question : "How many editors are working for you ?",
      answer : "We currently have +7 highly trained editors and free lancers who are "+
      "friendly, dedicated to our client’s success and helpful."
    },
    {
      question : "What services do you offer ?",
      answer : "Gnwife offers expert editing and proofreading for academic "+
      "researchers/students, authors, businesses, and job applicants. We also offer "+
      "referencing services, formatting services, and plagiarism checking for academic "+
      "researchers/students; essay crafting for college applicants; and typesetting, "+
      "cover design, and other publication services for authors."
    },
    {
      question : "What is your standard service ?",
      answer : "Our Standard service is a cost-effective solution that combines our "+
      "state-of-the-art designed based on extensive editing experience, with the "+
      "expertise of professional editor (this service does not go through rounds of "+
      "controlled editors). Your AI or human generated document will undergo a review "+
      "by a native English-speaking reviewer from your professional field to ensure the "+
      "highest quality and the human essence is intact. This budget-friendly option is "+
      "perfect for a quick and thorough language review without compromising the integrity of your content."
    },
    {
      question : "Will the native English-speaking reviewer provide feedback on my writing?",
      answer : "By ensuring we select a highly trained reviewer who has prior knowledge to your work, we ensure "+
      "we you get feedback to your writing."
    },
    {
      question : "What if I have additional requirement and specific instruction for the reviewer?",
      answer : "Our Standard editing service requires a predefined set of instructions at the time of"+
      "placing the order. If you have specific or detailed requirements, you can choose our Premium service."
    },
    {
      question : "Will you check my reference?",
      answer : "Our standard service is designed to improve the language, clarity, and "+
      "overall readability of your document's core content with human essence. For those "+
      "requiring additional support for editing and formatting references, we offer our "+
      "Premium Editing services. These upgraded service aim to provide comprehensive "+
      "assistance, including ensuring that your references adhere to your preferred "+
      "style guide, making your document fully polished and ready for submission or publication."
    },
    {
      question : "Can you suggest an interesting title for my easy?",
      answer : "We can suggest a list of suitable titles for you to choose from after "+
      "editing your assignment or essay and understanding the subject matter."
    },
    {
      question : "I have added new content to my writing, will you re-edit it?",
      answer : "We understand that revisions are sometimes necessary, but please note "+
      "that our revision policy covers the original content and requirements. Substantial"+
      "changes, such as adding or revising specific sections, may require a fresh look at "+
      "the entire document. In such cases, we may need to treat the revised document as a "+
      "new submission to ensure the highest quality of editing."
    },
    {
      question : "How long does your Standard services take?",
      answer : "Our Standard service offers a quick output time irrespective of the word count of your document."
    },
    {
      question : "I do not need editing. I just want my document to proofread and formatted.",
      answer : "Yes. You can customize your order to pick the kind of editing you want."+
      "We offer proofreading, copyediting, formatting, and feedback. Feel free to contact "+
      "us by chat, email, or phone to get a custom quote."
    },
    {
      question : "What is your Advanced service?",
      answer : "Our advanced service is a cost-effective solution that combines our "+
      "standards services with the multiple rounds of expertise controls by our "+
      "professional native English-speaking editors. Your document will undergo a deep"+
      "human essence editing process, followed by a master touch from our chief editor."
    },
    {
      question : "What does the advanced service include?",
      answer : "Our advanced service includes everything from the Standard service, "+
      "such as improving language, clarity, tactically retaining originality "+
      "(core ideas) or arguments, human essence input and readability. Additionally, "+
      "it offers a review by multiple rounds of human editors and a masters touch from "+
      "our chief editor. Lastly, you can choose from our add-on services like formatting "+
      "and plagiarism checking."
    },
    {
      question : "Will you check my reference?",
      answer : "Our advanced service is designed to add the master touch and "+
      "professionality to your document through our rigorous control services. "+
      "For those requiring additional support for editing and formatting references, "+
      "we offer our Premium Editing services."
    },
    {
      question : "How long does your advanced service take?",
      answer : "Our advanced editing service offers fast turnaround options. We will "+
      "deliver your edited document as per your preferred turnaround time."
    },
    {
      question : "I have added new content will you re-edit it?",
      answer : "We understand that revisions are sometimes necessary, but please note "+
      "that our revision policy covers the original content and requirements. Substantial "+
      "changes, such as adding or revising specific sections, may require a fresh look at "+
      "the entire document. In such cases, we may need to treat the revised document as a "+
      "new submission to ensure the highest quality of editing."
    },
    ]
  return(
    <>
    <Nav/>
    <div className="_faq">
      <h1>FREQUENTELY ASKED QUESTIONS</h1>
      {
        faqs.map((item, index)=>
        <FaqItem key={index} question={item.question} answer={item.answer}/>)
      }
    </div>
    <Footer/>
    </>
  ) 
}

export default Faq;