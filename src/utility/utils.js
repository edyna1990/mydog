  export const CleanText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent || ""
  }

  export const sortStory = (description, maxLength) => {
    const TrueCleanText = CleanText(description)
    let sortStory = TrueCleanText
    if (TrueCleanText.length>maxLength){
        const lastIndexSpace = TrueCleanText.lastIndexOf("", maxLength)
        if(lastIndexSpace!=-1){
            sortStory = TrueCleanText.substring(0, lastIndexSpace)
        }
        else{
            sortStory = TrueCleanText.substring(0, maxLength)
        }
    }
    return sortStory
  }