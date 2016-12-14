/**
 * @file A TypeScript file.
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2016
 * @license GPL-3.0
 * @since 0.0.1
 */


class Networking {}

class DataPersistence {}

class Window {
    private networking: Networking;

    public constructor(networking: Networking) {
        this.networking = networking;
    }

    public load(string: string) {}
}

class WindowManager {
    private windows: Window[] = [];

    public newWindow(url: string) {
        let window = new Window(new Networking());
        window.load(url);
        this.windows.push(window);
    }
}

class ControlEngine {
    private windowManager: WindowManager;

    public constructor() {
        this.windowManager = new WindowManager();
        this.windowManager.newWindow('https://google.com');
    }
}

