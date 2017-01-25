"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
//
var base_control_1 = require("./base-control");
var base_component_1 = require("../base-component");
var file_1 = require("../general/file");
var context_1 = require("../context");
var ImageBoxComponent = ImageBoxComponent_1 = (function (_super) {
    __extends(ImageBoxComponent, _super);
    function ImageBoxComponent(renderer, context) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.context = context;
        _this.allowedExtensions = ["jpg", "bmp", "png", "gif", "jpeg"];
        _this.defaultImage = _this.context.kernelImagesPath + "camera.png";
        _this.imageSrc = _this.defaultImage;
        //
        _this.fileChanged = new core_1.EventEmitter();
        _this.propagateChange = function (_) { };
        return _this;
    }
    ImageBoxComponent.prototype.validExtension = function (extension) {
        var valid = false;
        this.allowedExtensions.forEach(function (validExt) {
            if (extension.toLowerCase().trim() == validExt) {
                valid = true;
                return false;
            }
        });
        return valid;
    };
    ImageBoxComponent.prototype.updateImageSrc = function () {
        if (this.imageFile && (this.imageFile.content || this.imageFile.fileUri != '')) {
            if (this.imageFile.fileUri == '')
                this.imageSrc = this.imageFile.content;
            else
                this.imageSrc = this.context.fileServerPath + this.imageFile.fileUri;
        }
        else
            this.imageSrc = this.defaultImage;
    };
    ImageBoxComponent.prototype.ngOnChanges = function (changes) {
        if (changes['imageFile']) {
            this.updateImageSrc();
        }
    };
    ImageBoxComponent.prototype.fileChangedHandler = function (e) {
        var _this = this;
        var self = this;
        var selectedFile = this.fileInput.nativeElement.files[0];
        if (this.fileInput.nativeElement.files && this.fileInput.nativeElement.files[0]) {
            var info_1 = new file_1.FileInfo();
            info_1.contentType = 'images';
            info_1.originalFileName = selectedFile.name;
            // Obtener extensión del archivo
            var pointIndex = info_1.originalFileName.lastIndexOf('.');
            if (pointIndex >= 0) {
                info_1.extension = info_1.originalFileName.substring(pointIndex + 1);
            }
            if (this.validExtension(info_1.extension)) {
                var reader = new FileReader();
                reader.onload = function (args) {
                    info_1.content = args.target.result;
                    _this.imageFile = info_1;
                    self.fileChanged.next(info_1);
                    _this.propagateChange(info_1);
                    self.updateImageSrc();
                };
                reader.readAsDataURL(selectedFile);
            }
        }
    };
    ImageBoxComponent.prototype.selectFile = function () {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(this.fileInput.nativeElement, 'dispatchEvent', [event]);
    };
    ImageBoxComponent.prototype.removeFile = function () {
        this.fileChanged.next(null);
        this.propagateChange(null);
        this.imageFile = null;
        this.updateImageSrc();
    };
    //Implementación de control value accesor
    ImageBoxComponent.prototype.writeValue = function (value) {
        this.imageFile = value ? value : null;
        this.updateImageSrc();
    };
    ImageBoxComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    ImageBoxComponent.prototype.registerOnTouched = function () { };
    return ImageBoxComponent;
}(base_control_1.BaseControl));
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
        moduleId: module.id,
        selector: 'azteca-image-box',
        templateUrl: './image-box.component.html',
        providers: [{
                provide: base_component_1.BaseComponent,
                useExisting: core_1.forwardRef(function () { return ImageBoxComponent_1; })
            },
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return ImageBoxComponent_1; }),
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [core_1.Renderer, context_1.Context])
], ImageBoxComponent);
exports.ImageBoxComponent = ImageBoxComponent;
var ImageBoxComponent_1;

//# sourceMappingURL=image-box.component.js.map
