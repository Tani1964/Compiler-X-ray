import Lexemes from "./Lexemes"
import ParseTree from "./ParseTree"
import Tokens from "./Tokens"

const Outputs = () => {
  return (
    <div className="h-[80%] flex flex-col gap-[5px]">
        <Lexemes/>
        <Tokens/>
        <ParseTree/>
    </div>
  )
}

export default Outputs