export default function MealPage({params}){
    return(
        <>
        <h1>Individual Meal Page</h1>
        <p>Content: {params.slug}</p>
        </>
    )
}