import { useState } from "react"

import "./styles.css"

export type DropdownItemProperties = {
    title: string
    icon?: JSX.Element
    action?: () => unknown
}

export type DropdownMenuProperties = {
    label: string
    items: DropdownItemProperties[]
}

export function DropdownMenu({ items }: Omit<DropdownMenuProperties, "label">) {
    return (
        <div className="dropdown-container">
            <ul>
                {items.map(({ title }) => {
                    return (
                        <li>
                            { title }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export function DropdownMenuComponent(properties: DropdownMenuProperties) {
    const [isOpen, setOpen] = useState<boolean>()
    
    const onButtonClick = () => setOpen(!isOpen)

    return (
        <div className="dropdown">
            <button
                type="button"
                className="dropdown-button"
                onClick={ onButtonClick }
            >{ properties.label }</button>
            { isOpen && <DropdownMenu items={ properties.items }/> }
        </div>
    )
}
