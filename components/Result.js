import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move"; //use for imge cacheing

function Result({ result }) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {result.map((result) => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </FlipMove>
    )
}

export default Result
