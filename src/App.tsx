import { DropdownMenuComponent } from "./components/dropdown"

import "./styles.css"

export function App() {
    return (
        <div className="container">
            <DropdownMenuComponent 
                label="Contact"
                items={[
                    { title: "Github" },
                    { title: "Linkedin" },
                    { title: "Discord" }
                ]}
            />
        </div>
    )
}
