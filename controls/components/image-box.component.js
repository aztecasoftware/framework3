"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
//
const base_control_1 = require("../models/base-control");
const base_component_1 = require("../../base-component");
const file_1 = require("../../general/models/file");
const context_1 = require("../../context");
let ImageBoxComponent = ImageBoxComponent_1 = class ImageBoxComponent extends base_control_1.BaseControl {
    constructor(renderer, context) {
        super();
        this.renderer = renderer;
        this.context = context;
        this.allowedExtensions = ["jpg", "bmp", "png", "gif", "jpeg"];
        this.defaultImage = 'assets/img/kernel/camera.png';
        this.imageSrc = this.defaultImage;
        //
        this.fileChanged = new core_1.EventEmitter();
        this.propagateChange = (_) => { };
    }
    validExtension(extension) {
        let valid = false;
        this.allowedExtensions.forEach(validExt => {
            if (extension.toLowerCase().trim() == validExt) {
                valid = true;
                return false;
            }
        });
        return valid;
    }
    updateImageSrc() {
        if (this.imageFile && (this.imageFile.content || this.imageFile.fileUri != '')) {
            if (this.imageFile.fileUri == '')
                this.imageSrc = this.imageFile.content;
            else
                this.imageSrc = this.context.fileServerPath + this.imageFile.fileUri;
        }
        else
            this.imageSrc = this.defaultImage;
    }
    ngOnChanges(changes) {
        if (changes['imageFile']) {
            this.updateImageSrc();
        }
    }
    fileChangedHandler(e) {
        let self = this;
        let selectedFile = this.fileInput.nativeElement.files[0];
        if (this.fileInput.nativeElement.files && this.fileInput.nativeElement.files[0]) {
            let info = new file_1.FileInfo();
            info.contentType = 'images';
            info.originalFileName = selectedFile.name;
            // Obtener extensión del archivo
            let pointIndex = info.originalFileName.lastIndexOf('.');
            if (pointIndex >= 0) {
                info.extension = info.originalFileName.substring(pointIndex + 1);
            }
            if (this.validExtension(info.extension)) {
                let reader = new FileReader();
                reader.onload = (args) => {
                    info.content = args.target.result;
                    this.imageFile = info;
                    self.fileChanged.next(info);
                    this.propagateChange(info);
                    self.updateImageSrc();
                };
                reader.readAsDataURL(selectedFile);
            }
        }
    }
    selectFile() {
        let event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(this.fileInput.nativeElement, 'dispatchEvent', [event]);
    }
    removeFile() {
        this.fileChanged.next(null);
        this.propagateChange(null);
        this.imageFile = null;
        this.updateImageSrc();
    }
    //Implementación de control value accesor
    writeValue(value) {
        this.imageFile = value ? value : null;
        this.updateImageSrc();
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched() { }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", file_1.FileInfo)
], ImageBoxComponent.prototype, "imageFile", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ImageBoxComponent.prototype, "fileChanged", void 0);
__decorate([
    core_1.ViewChild('fileInput'),
    __metadata("design:type", core_1.ElementRef)
], ImageBoxComponent.prototype, "fileInput", void 0);
ImageBoxComponent = ImageBoxComponent_1 = __decorate([
    core_1.Component({
        selector: 'azteca-image-box',
        template: `
      <div class="btn-group">
          <button type="button" class="btn btn-default" title="Seleccionar imágen" (click)="selectFile()" *ngIf="enabled">
              <span class="glyphicon glyphicon-camera" aria-hidden="true"></span>
          </button>
          <button type="button" class="btn btn-default" title="Quitar imágen" (click)="removeFile()" *ngIf="enabled && imageFile && (imageFile.Content != undefined || imageFile.FileUri != '')">
              <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
      </div>

      <div class="panel panel-default">
          <div class="panel-body">
              <img class="img-responsive img-rounded" [src]="imageSrc" />
              <input type="file" #fileInput (change)="fileChangedHandler($event)" style="visibility:hidden; width:10px;height:1px;" />
          </div>
      </div>
    `,
        providers: [{
                provide: base_component_1.BaseComponent,
                useExisting: core_1.forwardRef(() => ImageBoxComponent_1)
            },
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(() => ImageBoxComponent_1),
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [core_1.Renderer, context_1.Context])
], ImageBoxComponent);
exports.ImageBoxComponent = ImageBoxComponent;
var ImageBoxComponent_1;
