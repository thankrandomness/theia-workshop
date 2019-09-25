import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const DndWidgetCommand = {
    id: 'DndWidget.command',
    label: "Shows a message"
};

@injectable()
export class DndWidgetCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(DndWidgetCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class DndWidgetMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: DndWidgetCommand.id,
            label: 'Say Hello'
        });
    }
}