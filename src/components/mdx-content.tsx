import { JSX } from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from 'sugar-high'
import Counter from "./counter";

function Code({children, ...props}: any) {
    let codeHTML = highlight(children)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
    code : Code,
    h1 : (props: any) => (
        <h1 {...props}  className="text-3xl font-bold mt-8 mb-4"
        >{props.children}</h1>
    ),
    Counter
}

export default function MDXContent(
    props: JSX.IntrinsicAttributes & MDXRemoteProps
){
    return (
        <MDXRemote
        {...props}
        components = {{...components, ...(props.components || { })}}
        />
    )
}