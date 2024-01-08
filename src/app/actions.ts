"use server"

export async function handleSubmit(state: any, formData: FormData) {   

    console.log("inside handleSubmit")

    const text = formData.get("text");

    console.log("text: " + text)

    const res = await fetch("https://webhooks.workato.com/webhooks/rest/d1128161-05ee-4c1b-b929-f5e9365b055f/webhook-translator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "text":  text}),
    });

    console.log(res)
    
    if(res.status === 200) return true

    return false;
}
