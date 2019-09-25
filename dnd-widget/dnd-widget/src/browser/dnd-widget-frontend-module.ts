/**
 * Generated using theia-extension-generator
 */

import { DndWidgetCommandContribution, DndWidgetMenuContribution } from './dnd-widget-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(DndWidgetCommandContribution);
    bind(MenuContribution).to(DndWidgetMenuContribution);
    
});