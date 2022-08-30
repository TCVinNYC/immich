import { writable } from 'svelte/store';
export var NotificationType;
(function (NotificationType) {
    NotificationType["Info"] = "Info";
    NotificationType["Error"] = "Error";
})(NotificationType || (NotificationType = {}));
export class ImmichNotification {
    constructor() {
        this.id = new Date().getTime();
        this.timeout = 3000;
    }
}
export class ImmichNotificationDto {
    constructor() {
        /**
         * Notification type
         * @type {NotificationType} [Info, Error]
         */
        this.type = NotificationType.Info;
        /**
         * Notification message
         */
        this.message = '';
    }
}
function createNotificationList() {
    const notificationList = writable([]);
    const show = (notificationInfo) => {
        const newNotification = new ImmichNotification();
        newNotification.message = notificationInfo.message;
        newNotification.type = notificationInfo.type;
        newNotification.timeout = notificationInfo.timeout || 3000;
        notificationList.update((currentList) => [...currentList, newNotification]);
    };
    const removeNotificationById = (id) => {
        notificationList.update((currentList) => currentList.filter((n) => n.id != id));
    };
    return {
        show,
        removeNotificationById,
        notificationList
    };
}
export const notificationController = createNotificationList();
//# sourceMappingURL=notification.js.map