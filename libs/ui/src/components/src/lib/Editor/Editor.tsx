import { Editor as MilkdownEditor, rootCtx } from '@milkdown/core'
import { commonmark } from '@milkdown/preset-commonmark'
import { ReactEditor, useEditor } from '@milkdown/react'

export const Web = () => {
    const editor = useEditor((root) =>
        MilkdownEditor.make()
            .config((ctx) => {
                ctx.set(rootCtx, root)
            })
            .use(commonmark),
    )
    return <ReactEditor editor={editor} />
}

export const Native = () => {}
