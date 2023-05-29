import React from "react";
import { ActionIcon, Menu, Modal, JsonInput} from "@mantine/core";
import { IconFileDots, IconTrash, IconDots } from "@tabler/icons-react";
import { PattenConfig } from "../../interface/shapesConfig";
import { useFavStore } from "../../store/favStore";

import { useDisclosure } from '@mantine/hooks';
type TemplateMenuProps = {
    data: PattenConfig;
    showsDelete: boolean
}

function TemplateMenu({ data, showsDelete }: TemplateMenuProps) {

    const [opened, { open, close }] = useDisclosure(false);
    const deleteItemFav = useFavStore((state) => state.deleteItem);

    return (
        <>
        <Modal opened={opened} onClose={close} title="Data">
            <JsonInput disabled value={JSON.stringify(data.config, null, " ")} minRows={12}/>
        </Modal>

        <Menu shadow="md" width={200} zIndex={99999}>
            <Menu.Target>
                <ActionIcon>
                    <IconDots size="1.125rem" />
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>

                {showsDelete 
                    && <Menu.Item icon={<IconTrash size={14} />} onClick={ () => deleteItemFav(data.title)}>
                        Delete
                    </Menu.Item>
                }

                <Menu.Item icon={<IconFileDots size={14} />} onClick={open}>
                    View Details
                </Menu.Item>

            </Menu.Dropdown>

        </Menu>
        </>
    )
}

export default TemplateMenu
