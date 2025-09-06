import { JSX, ReactNode } from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from 'sugar-high'
import Counter from "./counter";

type CodeProps = React.HTMLAttributes<HTMLElement> & { children: string };

function Code({children, ...props}: CodeProps ) {
    const codeHTML = highlight(children)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
    code : Code,
    h1 : (props: React.HTMLAttributes<HTMLHeadingElement> & { children: ReactNode }) => (
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