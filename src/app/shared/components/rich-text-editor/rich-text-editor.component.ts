import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  ActionCompleteEventArgs,
  HtmlEditorService,
  ImageService,
  LinkService,
  QuickToolbarService,
  RichTextEditorComponent,
  TableService,
  ToolbarService,
} from '@syncfusion/ej2-angular-richtexteditor';
import { randomString } from 'src/app/utils/randomString.util';

@Component({
  selector: 'j-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  providers: [
    ToolbarService,
    LinkService,
    ImageService,
    HtmlEditorService,
    TableService,
    QuickToolbarService,
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: JRichTextEditorComponent,
    },
  ],
})
export class JRichTextEditorComponent implements OnInit, ControlValueAccessor {
  @Input('height') iHeight: 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'xs';
  height!: number;
  @Input() htmlContent!: string;
  @Output() htmlContentChange = new EventEmitter<string>();
  value!: string;
  disabled = false;
  id = randomString(4);

  public tools: object = {
    items: [
      'Undo',
      'Redo',
      '|',
      'Bold',
      'Italic',
      'Underline',
      'StrikeThrough',
      '|',
      'FontName',
      'FontSize',
      'FontColor',
      'BackgroundColor',
      '|',
      'Formats',
      'Alignments',
      '|',
      'CreateTable',
      '|',
      'LowerCase',
      'UpperCase',
      '|',
      'OrderedList',
      'UnorderedList',
      '|',
      'Indent',
      'Outdent',
      '|',
      'CreateLink',
      //'Image',
      '|',
      'ClearFormat',
      'Print',
      '|',
      'FullScreen',
    ],
  };
  onChange: any = () => {};
  onTouch: any = () => {};
  constructor() {

  }

  ngOnInit(): void {

    switch (this.iHeight) {
      case 'xl':
        this.height = 300;
        break;
      case 'lg':
        this.height = 250;
        break;
      case 'md':
        this.height = 200;
        break;
      case 'sm':
        this.height = 150;
        break;
      case 'xs':
        this.height = 100;
        break;
    }
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  contentHtmlChange(html: string) {
    this.htmlContentChange.emit(html);
  }

  setDisabledState(isDisabled: boolean){
    this.disabled = isDisabled;
  }

}
