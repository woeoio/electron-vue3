'use strict';
module.exports = {
    lib: [],
    main: {
        data() {
            return {}
        },
        template: `<div class="head">
        <div>
        <span>{{$util.remote.app.name}} {{$util.remote.app.getVersion()}}</span>
        </div>
        <div>
        <i @click="settings" class="iconfont iconSettingscontrol no-drag cursor-pointer"></i>
        <i @click="system('mini')" class="iconfont iconMinus no-drag cursor-pointer"></i>
        <i @click="system('closed')" class="iconfont iconCancelcontrol no-drag cursor-pointer"></i>
        </div>
    </div>`,
        created() {
        },
        beforeDestroy() {
        },
        methods: {
           async settings() {
                let id = await this.$parent.Dialog(
                    {
                        name: '设置',
                        v: 'dialog-settings',
                        width: 600,
                        height: 500
                    }
                );
               console.log(id);
            },
            system(channel) {
                this.$util.ipcRenderer.send(channel);
            }
        }
    }
};