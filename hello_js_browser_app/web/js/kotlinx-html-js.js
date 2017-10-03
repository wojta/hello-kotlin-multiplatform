(function(root, factory) {
  if (typeof define === 'function' && define.amd)
    define('kotlinx-html-js', ['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-html-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-html-js'.");
    }
    root['kotlinx-html-js'] = factory(typeof this['kotlinx-html-js'] === 'undefined' ? {} : this['kotlinx-html-js'], kotlin);
  }
}(this, function(_, Kotlin) {
  'use strict';
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var kotlin_0 = Kotlin.kotlin;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  var emptyMap_0 = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_73mtqc$;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var Enum = Kotlin.kotlin.Enum;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var Throwable = Error;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var step = Kotlin.kotlin.ranges.step_xsgg7u$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var Annotation = Kotlin.kotlin.Annotation;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var Map = Kotlin.kotlin.collections.Map;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  StringAttribute.prototype = Object.create(Attribute.prototype);
  StringAttribute.prototype.constructor = StringAttribute;
  BooleanAttribute.prototype = Object.create(Attribute.prototype);
  BooleanAttribute.prototype.constructor = BooleanAttribute;
  TickerAttribute.prototype = Object.create(Attribute.prototype);
  TickerAttribute.prototype.constructor = TickerAttribute;
  EnumAttribute.prototype = Object.create(Attribute.prototype);
  EnumAttribute.prototype.constructor = EnumAttribute;
  StringSetAttribute.prototype = Object.create(Attribute.prototype);
  StringSetAttribute.prototype.constructor = StringSetAttribute;
  UL.prototype = Object.create(HTMLTag.prototype);
  UL.prototype.constructor = UL;
  OBJECT_.prototype = Object.create(HTMLTag.prototype);
  OBJECT_.prototype.constructor = OBJECT_;
  OL.prototype = Object.create(HTMLTag.prototype);
  OL.prototype.constructor = OL;
  OPTGROUP.prototype = Object.create(HTMLTag.prototype);
  OPTGROUP.prototype.constructor = OPTGROUP;
  OPTION.prototype = Object.create(HTMLTag.prototype);
  OPTION.prototype.constructor = OPTION;
  OUTPUT.prototype = Object.create(HTMLTag.prototype);
  OUTPUT.prototype.constructor = OUTPUT;
  I.prototype = Object.create(HTMLTag.prototype);
  I.prototype.constructor = I;
  IFRAME.prototype = Object.create(HTMLTag.prototype);
  IFRAME.prototype.constructor = IFRAME;
  IMG.prototype = Object.create(HTMLTag.prototype);
  IMG.prototype.constructor = IMG;
  INPUT.prototype = Object.create(HTMLTag.prototype);
  INPUT.prototype.constructor = INPUT;
  INS.prototype = Object.create(HTMLTag.prototype);
  INS.prototype.constructor = INS;
  TABLE.prototype = Object.create(HTMLTag.prototype);
  TABLE.prototype.constructor = TABLE;
  TBODY.prototype = Object.create(HTMLTag.prototype);
  TBODY.prototype.constructor = TBODY;
  TD.prototype = Object.create(HTMLTag.prototype);
  TD.prototype.constructor = TD;
  TEXTAREA.prototype = Object.create(HTMLTag.prototype);
  TEXTAREA.prototype.constructor = TEXTAREA;
  TFOOT.prototype = Object.create(HTMLTag.prototype);
  TFOOT.prototype.constructor = TFOOT;
  TH.prototype = Object.create(HTMLTag.prototype);
  TH.prototype.constructor = TH;
  THEAD.prototype = Object.create(HTMLTag.prototype);
  THEAD.prototype.constructor = THEAD;
  TIME.prototype = Object.create(HTMLTag.prototype);
  TIME.prototype.constructor = TIME;
  TITLE.prototype = Object.create(HTMLTag.prototype);
  TITLE.prototype.constructor = TITLE;
  TR.prototype = Object.create(HTMLTag.prototype);
  TR.prototype.constructor = TR;
  Dir.prototype = Object.create(Enum.prototype);
  Dir.prototype.constructor = Dir;
  Draggable.prototype = Object.create(Enum.prototype);
  Draggable.prototype.constructor = Draggable;
  RunAt.prototype = Object.create(Enum.prototype);
  RunAt.prototype.constructor = RunAt;
  AreaShape.prototype = Object.create(Enum.prototype);
  AreaShape.prototype.constructor = AreaShape;
  ButtonFormEncType.prototype = Object.create(Enum.prototype);
  ButtonFormEncType.prototype.constructor = ButtonFormEncType;
  ButtonFormMethod.prototype = Object.create(Enum.prototype);
  ButtonFormMethod.prototype.constructor = ButtonFormMethod;
  ButtonType.prototype = Object.create(Enum.prototype);
  ButtonType.prototype.constructor = ButtonType;
  CommandType.prototype = Object.create(Enum.prototype);
  CommandType.prototype.constructor = CommandType;
  FormEncType.prototype = Object.create(Enum.prototype);
  FormEncType.prototype.constructor = FormEncType;
  FormMethod.prototype = Object.create(Enum.prototype);
  FormMethod.prototype.constructor = FormMethod;
  IframeSandbox.prototype = Object.create(Enum.prototype);
  IframeSandbox.prototype.constructor = IframeSandbox;
  InputType.prototype = Object.create(Enum.prototype);
  InputType.prototype.constructor = InputType;
  InputFormEncType.prototype = Object.create(Enum.prototype);
  InputFormEncType.prototype.constructor = InputFormEncType;
  InputFormMethod.prototype = Object.create(Enum.prototype);
  InputFormMethod.prototype.constructor = InputFormMethod;
  KeyGenKeyType.prototype = Object.create(Enum.prototype);
  KeyGenKeyType.prototype.constructor = KeyGenKeyType;
  ScriptType.prototype = Object.create(Enum.prototype);
  ScriptType.prototype.constructor = ScriptType;
  TextAreaWrap.prototype = Object.create(Enum.prototype);
  TextAreaWrap.prototype.constructor = TextAreaWrap;
  ThScope.prototype = Object.create(Enum.prototype);
  ThScope.prototype.constructor = ThScope;
  MAP.prototype = Object.create(HTMLTag.prototype);
  MAP.prototype.constructor = MAP;
  MARK.prototype = Object.create(HTMLTag.prototype);
  MARK.prototype.constructor = MARK;
  MATH.prototype = Object.create(HTMLTag.prototype);
  MATH.prototype.constructor = MATH;
  MATHML.prototype = Object.create(HTMLTag.prototype);
  MATHML.prototype.constructor = MATHML;
  META.prototype = Object.create(HTMLTag.prototype);
  META.prototype.constructor = META;
  METER.prototype = Object.create(HTMLTag.prototype);
  METER.prototype.constructor = METER;
  RP.prototype = Object.create(HTMLTag.prototype);
  RP.prototype.constructor = RP;
  RT.prototype = Object.create(HTMLTag.prototype);
  RT.prototype.constructor = RT;
  RUBY.prototype = Object.create(HTMLTag.prototype);
  RUBY.prototype.constructor = RUBY;
  P.prototype = Object.create(HTMLTag.prototype);
  P.prototype.constructor = P;
  PARAM.prototype = Object.create(HTMLTag.prototype);
  PARAM.prototype.constructor = PARAM;
  PRE.prototype = Object.create(HTMLTag.prototype);
  PRE.prototype.constructor = PRE;
  PROGRESS.prototype = Object.create(HTMLTag.prototype);
  PROGRESS.prototype.constructor = PROGRESS;
  FIELDSET.prototype = Object.create(HTMLTag.prototype);
  FIELDSET.prototype.constructor = FIELDSET;
  FIGCAPTION.prototype = Object.create(HTMLTag.prototype);
  FIGCAPTION.prototype.constructor = FIGCAPTION;
  FIGURE.prototype = Object.create(HTMLTag.prototype);
  FIGURE.prototype.constructor = FIGURE;
  FOOTER.prototype = Object.create(HTMLTag.prototype);
  FOOTER.prototype.constructor = FOOTER;
  FORM.prototype = Object.create(HTMLTag.prototype);
  FORM.prototype.constructor = FORM;
  NAV.prototype = Object.create(HTMLTag.prototype);
  NAV.prototype.constructor = NAV;
  NOSCRIPT.prototype = Object.create(HTMLTag.prototype);
  NOSCRIPT.prototype.constructor = NOSCRIPT;
  VAR_.prototype = Object.create(HTMLTag.prototype);
  VAR_.prototype.constructor = VAR_;
  VIDEO.prototype = Object.create(HTMLTag.prototype);
  VIDEO.prototype.constructor = VIDEO;
  KBD.prototype = Object.create(HTMLTag.prototype);
  KBD.prototype.constructor = KBD;
  KEYGEN.prototype = Object.create(HTMLTag.prototype);
  KEYGEN.prototype.constructor = KEYGEN;
  SAMP.prototype = Object.create(HTMLTag.prototype);
  SAMP.prototype.constructor = SAMP;
  SCRIPT.prototype = Object.create(HTMLTag.prototype);
  SCRIPT.prototype.constructor = SCRIPT;
  SECTION.prototype = Object.create(HTMLTag.prototype);
  SECTION.prototype.constructor = SECTION;
  SELECT.prototype = Object.create(HTMLTag.prototype);
  SELECT.prototype.constructor = SELECT;
  SMALL.prototype = Object.create(HTMLTag.prototype);
  SMALL.prototype.constructor = SMALL;
  SOURCE.prototype = Object.create(HTMLTag.prototype);
  SOURCE.prototype.constructor = SOURCE;
  SPAN.prototype = Object.create(HTMLTag.prototype);
  SPAN.prototype.constructor = SPAN;
  STRONG.prototype = Object.create(HTMLTag.prototype);
  STRONG.prototype.constructor = STRONG;
  STYLE.prototype = Object.create(HTMLTag.prototype);
  STYLE.prototype.constructor = STYLE;
  SUB.prototype = Object.create(HTMLTag.prototype);
  SUB.prototype.constructor = SUB;
  SUP.prototype = Object.create(HTMLTag.prototype);
  SUP.prototype.constructor = SUP;
  SVG.prototype = Object.create(HTMLTag.prototype);
  SVG.prototype.constructor = SVG;
  DATALIST.prototype = Object.create(HTMLTag.prototype);
  DATALIST.prototype.constructor = DATALIST;
  DD.prototype = Object.create(HTMLTag.prototype);
  DD.prototype.constructor = DD;
  DEL.prototype = Object.create(HTMLTag.prototype);
  DEL.prototype.constructor = DEL;
  DETAILS.prototype = Object.create(HTMLTag.prototype);
  DETAILS.prototype.constructor = DETAILS;
  DFN.prototype = Object.create(HTMLTag.prototype);
  DFN.prototype.constructor = DFN;
  DIALOG.prototype = Object.create(HTMLTag.prototype);
  DIALOG.prototype.constructor = DIALOG;
  DIV.prototype = Object.create(HTMLTag.prototype);
  DIV.prototype.constructor = DIV;
  DL.prototype = Object.create(HTMLTag.prototype);
  DL.prototype.constructor = DL;
  DT.prototype = Object.create(HTMLTag.prototype);
  DT.prototype.constructor = DT;
  LABEL.prototype = Object.create(HTMLTag.prototype);
  LABEL.prototype.constructor = LABEL;
  LEGEND.prototype = Object.create(HTMLTag.prototype);
  LEGEND.prototype.constructor = LEGEND;
  LI.prototype = Object.create(HTMLTag.prototype);
  LI.prototype.constructor = LI;
  LINK.prototype = Object.create(HTMLTag.prototype);
  LINK.prototype.constructor = LINK;
  Q.prototype = Object.create(HTMLTag.prototype);
  Q.prototype.constructor = Q;
  B.prototype = Object.create(HTMLTag.prototype);
  B.prototype.constructor = B;
  BASE.prototype = Object.create(HTMLTag.prototype);
  BASE.prototype.constructor = BASE;
  BDI.prototype = Object.create(HTMLTag.prototype);
  BDI.prototype.constructor = BDI;
  BDO.prototype = Object.create(HTMLTag.prototype);
  BDO.prototype.constructor = BDO;
  BLOCKQUOTE.prototype = Object.create(HTMLTag.prototype);
  BLOCKQUOTE.prototype.constructor = BLOCKQUOTE;
  BODY.prototype = Object.create(HTMLTag.prototype);
  BODY.prototype.constructor = BODY;
  BR.prototype = Object.create(HTMLTag.prototype);
  BR.prototype.constructor = BR;
  BUTTON.prototype = Object.create(HTMLTag.prototype);
  BUTTON.prototype.constructor = BUTTON;
  A.prototype = Object.create(HTMLTag.prototype);
  A.prototype.constructor = A;
  ABBR.prototype = Object.create(HTMLTag.prototype);
  ABBR.prototype.constructor = ABBR;
  ADDRESS.prototype = Object.create(HTMLTag.prototype);
  ADDRESS.prototype.constructor = ADDRESS;
  AREA.prototype = Object.create(HTMLTag.prototype);
  AREA.prototype.constructor = AREA;
  ARTICLE.prototype = Object.create(HTMLTag.prototype);
  ARTICLE.prototype.constructor = ARTICLE;
  ASIDE.prototype = Object.create(HTMLTag.prototype);
  ASIDE.prototype.constructor = ASIDE;
  AUDIO.prototype = Object.create(HTMLTag.prototype);
  AUDIO.prototype.constructor = AUDIO;
  CANVAS.prototype = Object.create(HTMLTag.prototype);
  CANVAS.prototype.constructor = CANVAS;
  CAPTION.prototype = Object.create(HTMLTag.prototype);
  CAPTION.prototype.constructor = CAPTION;
  CITE.prototype = Object.create(HTMLTag.prototype);
  CITE.prototype.constructor = CITE;
  CODE.prototype = Object.create(HTMLTag.prototype);
  CODE.prototype.constructor = CODE;
  COL.prototype = Object.create(HTMLTag.prototype);
  COL.prototype.constructor = COL;
  COLGROUP.prototype = Object.create(HTMLTag.prototype);
  COLGROUP.prototype.constructor = COLGROUP;
  COMMAND.prototype = Object.create(HTMLTag.prototype);
  COMMAND.prototype.constructor = COMMAND;
  EM.prototype = Object.create(HTMLTag.prototype);
  EM.prototype.constructor = EM;
  EMBED.prototype = Object.create(HTMLTag.prototype);
  EMBED.prototype.constructor = EMBED;
  H1.prototype = Object.create(HTMLTag.prototype);
  H1.prototype.constructor = H1;
  H2.prototype = Object.create(HTMLTag.prototype);
  H2.prototype.constructor = H2;
  H3.prototype = Object.create(HTMLTag.prototype);
  H3.prototype.constructor = H3;
  H4.prototype = Object.create(HTMLTag.prototype);
  H4.prototype.constructor = H4;
  H5.prototype = Object.create(HTMLTag.prototype);
  H5.prototype.constructor = H5;
  H6.prototype = Object.create(HTMLTag.prototype);
  H6.prototype.constructor = H6;
  HEAD.prototype = Object.create(HTMLTag.prototype);
  HEAD.prototype.constructor = HEAD;
  HEADER.prototype = Object.create(HTMLTag.prototype);
  HEADER.prototype.constructor = HEADER;
  HGROUP.prototype = Object.create(HTMLTag.prototype);
  HGROUP.prototype.constructor = HGROUP;
  HR.prototype = Object.create(HTMLTag.prototype);
  HR.prototype.constructor = HR;
  HTML.prototype = Object.create(HTMLTag.prototype);
  HTML.prototype.constructor = HTML;
  Entities.prototype = Object.create(Enum.prototype);
  Entities.prototype.constructor = Entities;
  PredicateResult.prototype = Object.create(Enum.prototype);
  PredicateResult.prototype.constructor = PredicateResult;

  function currentTimeMillis() {
    return Kotlin.Long.fromNumber((new Date()).getTime());
  }

  function setEvent($receiver_17, name, callback) {
    $receiver_17[name] = callback;
  }

  function JSDOMBuilder(document) {
    this.document = document;
    this.path_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    this.lastLeaved_0 = null;
  }

  JSDOMBuilder.prototype.onTagStart_tkgjla$ = function(tag) {
    var tmp$_17, tmp$_18, tmp$_19;
    if (tag.namespace != null) {
      tmp$_19 = this.document.createElementNS((tmp$_17 = tag.namespace) != null ? tmp$_17 : Kotlin.throwNPE(), tag.tagName);
    }
    else
      tmp$_19 = Kotlin.isType(tmp$_18 = this.document.createElement(tag.tagName), HTMLElement) ? tmp$_18 : Kotlin.throwCCE();
    var element_17 = tmp$_19;
    var tmp$_20;
    tmp$_20 = tag.attributesEntries.iterator();
    while (tmp$_20.hasNext()) {
      var element_18 = tmp$_20.next();
      element_17.setAttribute(element_18.key, element_18.value);
    }
    if (!this.path_0.isEmpty()) {
      last(this.path_0).appendChild(element_17);
    }
    this.path_0.add_11rb$(element_17);
  };
  JSDOMBuilder.prototype.onTagAttributeChange_5n2z71$ = function(tag, attribute, value) {
    if (this.path_0.isEmpty())
      throw new IllegalStateException('No current tag');
    else {
      if (!Kotlin.equals(last(this.path_0).tagName.toLowerCase(), tag.tagName.toLowerCase()))
        throw new IllegalStateException('Wrong current tag');
      else {
        var node = last(this.path_0);
        if (value == null) {
          node.removeAttribute(attribute);
        }
        else {
          node.setAttribute(attribute, value);
        }
      }
    }
  };
  JSDOMBuilder.prototype.onTagEvent_azi6uv$ = function(tag, event, value) {
    if (this.path_0.isEmpty())
      throw new IllegalStateException('No current tag');
    else {
      if (!Kotlin.equals(last(this.path_0).tagName.toLowerCase(), tag.tagName.toLowerCase()))
        throw new IllegalStateException('Wrong current tag');
      else {
        last(this.path_0)[event] = value;
      }
    }
  };
  JSDOMBuilder.prototype.onTagEnd_tkgjla$ = function(tag) {
    var tmp$_17 = this.path_0.isEmpty();
    if (!tmp$_17) {
      tmp$_17 = !Kotlin.equals(last(this.path_0).tagName.toLowerCase(), tag.tagName.toLowerCase());
    }
    if (tmp$_17) {
      throw new IllegalStateException("We haven't entered tag " + tag.tagName + ' but trying to leave');
    }
    this.lastLeaved_0 = this.path_0.removeAt_za3lpa$(get_lastIndex(this.path_0));
  };
  JSDOMBuilder.prototype.onTagContent_6bul2c$ = function(content) {
    if (this.path_0.isEmpty()) {
      throw new IllegalStateException('No current DOM node');
    }
    last(this.path_0).appendChild(this.document.createTextNode(content.toString()));
  };
  JSDOMBuilder.prototype.onTagContentEntity_ws8or7$ = function(entity) {
    var tmp$_17;
    if (this.path_0.isEmpty()) {
      throw new IllegalStateException('No current DOM node');
    }
    var s = Kotlin.isType(tmp$_17 = this.document.createElement('span'), HTMLElement) ? tmp$_17 : Kotlin.throwCCE();
    s.innerHTML = entity.text;
    var tmp$_18 = last(this.path_0);
    var $receiver_17 = asList(s.childNodes);
    var destination_17 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_19;
    tmp$_19 = $receiver_17.iterator();
    while (tmp$_19.hasNext()) {
      var element_17 = tmp$_19.next();
      if (element_17.nodeType === Node.TEXT_NODE) {
        destination_17.add_11rb$(element_17);
      }
    }
    tmp$_18.appendChild(first(destination_17));
  };
  JSDOMBuilder.prototype.onTagContentUnsafe_kntra7$ = function(block) {
    var $receiver_17 = new DefaultUnsafe();
    block($receiver_17);
    last(this.path_0).innerHTML = last(this.path_0).innerHTML + $receiver_17.toString();
  };
  JSDOMBuilder.prototype.finalize = function() {
    var tmp$_17, tmp$_18;
    tmp$_18 = (tmp$_17 = this.lastLeaved_0) != null ? this.asR_0(tmp$_17) : null;
    if (tmp$_18 == null) {
      throw new IllegalStateException("We can't finalize as there was no tags");
    }
    return tmp$_18;
  };
  JSDOMBuilder.prototype.asR_0 = function($receiver_17) {
    return $receiver_17;
  };
  JSDOMBuilder.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JSDOMBuilder',
    interfaces: [TagConsumer]
  };

  function createTree($receiver_17) {
    return new JSDOMBuilder($receiver_17);
  }

  function get_create($receiver_17) {
    return new JSDOMBuilder($receiver_17);
  }

  function append$lambda$lambda(closure$result, this$append) {
    return function(it, partial) {
      if (!partial) {
        closure$result.add_11rb$(it);
        this$append.appendChild(it);
      }
    };
  }

  function append($receiver_17, block) {
    var result = ArrayList_init();
    block(onFinalize(createTree(get_ownerDocumentExt($receiver_17)), append$lambda$lambda(result, $receiver_17)));
    return result;
  }

  function get_append$lambda(this$append) {
    return function(element_17, partial) {
      if (!partial) {
        this$append.appendChild(element_17);
      }
    };
  }

  function get_append($receiver_17) {
    return onFinalize(createTree(get_ownerDocumentExt($receiver_17)), get_append$lambda($receiver_17));
  }

  function get_ownerDocumentExt($receiver_17) {
    var tmp$_17;
    if (Kotlin.isType($receiver_17, Document))
      return $receiver_17;
    else {
      tmp$_17 = $receiver_17.ownerDocument;
      if (tmp$_17 == null) {
        throw new IllegalStateException('Node has no ownerDocument');
      }
      return tmp$_17;
    }
  }

  function injectTo($receiver_17, bean, field) {
    field.set(bean, $receiver_17);
  }

  function injectToUnsafe($receiver_17, bean, field) {
    injectTo($receiver_17, bean, field);
  }

  function InjectCapture() {
  }

  InjectCapture.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'InjectCapture',
    interfaces: []
  };

  function InjectByClassName(className) {
    this.className = className;
  }

  InjectByClassName.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InjectByClassName',
    interfaces: [InjectCapture]
  };

  function InjectByTagName(tagName) {
    this.tagName = tagName;
  }

  InjectByTagName.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InjectByTagName',
    interfaces: [InjectCapture]
  };

  function InjectRoot() {
    InjectRoot_instance = this;
  }

  InjectRoot.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'InjectRoot',
    interfaces: [InjectCapture]
  };
  var InjectRoot_instance = null;

  function InjectRoot_getInstance() {
    if (InjectRoot_instance === null) {
      new InjectRoot();
    }
    return InjectRoot_instance;
  }

  function CustomCapture() {
  }

  CustomCapture.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'CustomCapture',
    interfaces: [InjectCapture]
  };

  function InjectorConsumer(downstream, bean, rules) {
    this.downstream = downstream;
    this.bean = bean;
    var destination_17 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_17;
    tmp$_17 = rules.iterator();
    while (tmp$_17.hasNext()) {
      var element_17 = tmp$_17.next();
      if (Kotlin.isType(element_17.first, InjectByClassName)) {
        destination_17.add_11rb$(element_17);
      }
    }
    var destination_18 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$(destination_17, 10));
    var tmp$_18;
    tmp$_18 = destination_17.iterator();
    while (tmp$_18.hasNext()) {
      var item = tmp$_18.next();
      var tmp$_19;
      destination_18.add_11rb$(to(Kotlin.isType(tmp$_19 = item.first, InjectByClassName) ? tmp$_19 : Kotlin.throwCCE(), item.second));
    }
    var destination_19 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
    var tmp$_20;
    tmp$_20 = destination_18.iterator();
    while (tmp$_20.hasNext()) {
      var element_18 = tmp$_20.next();
      var key = element_18.first.className;
      var tmp$_21;
      var value = destination_19.get_11rb$(key);
      if (value == null) {
        var answer = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
        destination_19.put_xwzc9p$(key, answer);
        tmp$_21 = answer;
      }
      else {
        tmp$_21 = value;
      }
      var list = tmp$_21;
      list.add_11rb$(element_18.second);
    }
    this.classesMap_0 = destination_19;
    var destination_20 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_22;
    tmp$_22 = rules.iterator();
    while (tmp$_22.hasNext()) {
      var element_19 = tmp$_22.next();
      if (Kotlin.isType(element_19.first, InjectByTagName)) {
        destination_20.add_11rb$(element_19);
      }
    }
    var destination_21 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$(destination_20, 10));
    var tmp$_23;
    tmp$_23 = destination_20.iterator();
    while (tmp$_23.hasNext()) {
      var item_0 = tmp$_23.next();
      var tmp$_24;
      destination_21.add_11rb$(to(Kotlin.isType(tmp$_24 = item_0.first, InjectByTagName) ? tmp$_24 : Kotlin.throwCCE(), item_0.second));
    }
    var destination_22 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
    var tmp$_25;
    tmp$_25 = destination_21.iterator();
    while (tmp$_25.hasNext()) {
      var element_20 = tmp$_25.next();
      var key_0 = element_20.first.tagName.toLowerCase();
      var tmp$_26;
      var value_0 = destination_22.get_11rb$(key_0);
      if (value_0 == null) {
        var answer_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
        destination_22.put_xwzc9p$(key_0, answer_0);
        tmp$_26 = answer_0;
      }
      else {
        tmp$_26 = value_0;
      }
      var list_0 = tmp$_26;
      list_0.add_11rb$(element_20.second);
    }
    this.tagNamesMap_0 = destination_22;
    var destination_23 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_27;
    tmp$_27 = rules.iterator();
    while (tmp$_27.hasNext()) {
      var element_21 = tmp$_27.next();
      if (Kotlin.equals(element_21.first, InjectRoot_getInstance())) {
        destination_23.add_11rb$(element_21);
      }
    }
    var destination_24 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$(destination_23, 10));
    var tmp$_28;
    tmp$_28 = destination_23.iterator();
    while (tmp$_28.hasNext()) {
      var item_1 = tmp$_28.next();
      destination_24.add_11rb$(item_1.second);
    }
    this.rootCaptures_0 = destination_24;
    var destination_25 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_29;
    tmp$_29 = rules.iterator();
    while (tmp$_29.hasNext()) {
      var element_22 = tmp$_29.next();
      if (Kotlin.isType(element_22.first, CustomCapture)) {
        destination_25.add_11rb$(element_22);
      }
    }
    var destination_26 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$(destination_25, 10));
    var tmp$_30;
    tmp$_30 = destination_25.iterator();
    while (tmp$_30.hasNext()) {
      var item_2 = tmp$_30.next();
      var tmp$_31;
      destination_26.add_11rb$(to(Kotlin.isType(tmp$_31 = item_2.first, CustomCapture) ? tmp$_31 : Kotlin.throwCCE(), item_2.second));
    }
    this.customCaptures_0 = destination_26;
  }

  InjectorConsumer.prototype.onTagEnd_tkgjla$ = function(tag) {
    var tmp$_17;
    this.downstream.onTagEnd_tkgjla$(tag);
    var node = this.downstream.finalize();
    if (!this.classesMap_0.isEmpty()) {
      var $receiver_17 = asList(node.classList);
      var destination_17 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
      var tmp$_18;
      tmp$_18 = $receiver_17.iterator();
      while (tmp$_18.hasNext()) {
        var element_17 = tmp$_18.next();
        var tmp$_19;
        var list = (tmp$_19 = this.classesMap_0.get_11rb$(element_17)) != null ? tmp$_19 : emptyList();
        Kotlin.kotlin.collections.addAll_ipc267$(destination_17, list);
      }
      var tmp$_20;
      tmp$_20 = destination_17.iterator();
      while (tmp$_20.hasNext()) {
        var element_18 = tmp$_20.next();
        injectToUnsafe(node, this.bean, element_18);
      }
    }
    if (!this.tagNamesMap_0.isEmpty()) {
      if ((tmp$_17 = this.tagNamesMap_0.get_11rb$(node.tagName.toLowerCase())) != null) {
        var tmp$_21;
        tmp$_21 = tmp$_17.iterator();
        while (tmp$_21.hasNext()) {
          var element_19 = tmp$_21.next();
          injectToUnsafe(node, this.bean, element_19);
        }
      }
    }
    var $receiver_18 = this.customCaptures_0;
    var destination_18 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_22;
    tmp$_22 = $receiver_18.iterator();
    while (tmp$_22.hasNext()) {
      var element_20 = tmp$_22.next();
      if (element_20.first.apply_lt8gi4$(node)) {
        destination_18.add_11rb$(element_20);
      }
    }
    var destination_19 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$(destination_18, 10));
    var tmp$_23;
    tmp$_23 = destination_18.iterator();
    while (tmp$_23.hasNext()) {
      var item = tmp$_23.next();
      destination_19.add_11rb$(item.second);
    }
    var tmp$_24;
    tmp$_24 = destination_19.iterator();
    while (tmp$_24.hasNext()) {
      var element_21 = tmp$_24.next();
      injectToUnsafe(node, this.bean, element_21);
    }
  };
  InjectorConsumer.prototype.finalize = function() {
    var node = this.downstream.finalize();
    var tmp$_17;
    tmp$_17 = this.rootCaptures_0.iterator();
    while (tmp$_17.hasNext()) {
      var element_17 = tmp$_17.next();
      injectToUnsafe(node, this.bean, element_17);
    }
    return node;
  };
  InjectorConsumer.prototype.onTagAttributeChange_5n2z71$ = function(tag, attribute, value) {
    return this.downstream.onTagAttributeChange_5n2z71$(tag, attribute, value);
  };
  InjectorConsumer.prototype.onTagContent_6bul2c$ = function(content) {
    return this.downstream.onTagContent_6bul2c$(content);
  };
  InjectorConsumer.prototype.onTagContentEntity_ws8or7$ = function(entity) {
    return this.downstream.onTagContentEntity_ws8or7$(entity);
  };
  InjectorConsumer.prototype.onTagContentUnsafe_kntra7$ = function(block) {
    return this.downstream.onTagContentUnsafe_kntra7$(block);
  };
  InjectorConsumer.prototype.onTagError_cjwpn3$ = function(tag, exception) {
    return this.downstream.onTagError_cjwpn3$(tag, exception);
  };
  InjectorConsumer.prototype.onTagEvent_azi6uv$ = function(tag, event, value) {
    return this.downstream.onTagEvent_azi6uv$(tag, event, value);
  };
  InjectorConsumer.prototype.onTagStart_tkgjla$ = function(tag) {
    return this.downstream.onTagStart_tkgjla$(tag);
  };
  InjectorConsumer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InjectorConsumer',
    interfaces: [TagConsumer]
  };

  function inject($receiver_17, bean, rules) {
    return new InjectorConsumer($receiver_17, bean, rules);
  }

  function appendAndInject$lambda(closure$bean, closure$rules, closure$block) {
    return function($receiver_17) {
      closure$block(new InjectorConsumer($receiver_17, closure$bean, closure$rules));
      kotlin_0.Unit;
    };
  }

  function appendAndInject($receiver_17, bean, rules, block) {
    return append($receiver_17, appendAndInject$lambda(bean, rules, block));
  }

  function get_onAbortFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onAbort");
  }

  function set_onAbortFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onabort', newValue);
  }

  function get_onBlurFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onBlur");
  }

  function set_onBlurFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onblur', newValue);
  }

  function get_onCanPlayFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onCanPlay");
  }

  function set_onCanPlayFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'oncanplay', newValue);
  }

  function get_onCanPlayThroughFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onCanPlayThrough");
  }

  function set_onCanPlayThroughFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'oncanplaythrough', newValue);
  }

  function get_onChangeFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onChange");
  }

  function set_onChangeFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onchange', newValue);
  }

  function get_onClickFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onClick");
  }

  function set_onClickFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onclick', newValue);
  }

  function get_onContextMenuFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onContextMenu");
  }

  function set_onContextMenuFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'oncontextmenu', newValue);
  }

  function get_onDoubleClickFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onDoubleClick");
  }

  function set_onDoubleClickFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'ondblclick', newValue);
  }

  function get_onDragFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onDrag");
  }

  function set_onDragFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'ondrag', newValue);
  }

  function get_onDragEnterFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onDragEnter");
  }

  function set_onDragEnterFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'ondragenter', newValue);
  }

  function get_onDragLeaveFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onDragLeave");
  }

  function set_onDragLeaveFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'ondragleave', newValue);
  }

  function get_onDragOverFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onDragOver");
  }

  function set_onDragOverFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'ondragover', newValue);
  }

  function get_onDragStartFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onDragStart");
  }

  function set_onDragStartFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'ondragstart', newValue);
  }

  function get_onDropFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onDrop");
  }

  function set_onDropFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'ondrop', newValue);
  }

  function get_onDurationChangeFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onDurationChange");
  }

  function set_onDurationChangeFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'ondurationchange', newValue);
  }

  function get_onEmptiedFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onEmptied");
  }

  function set_onEmptiedFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onemptied', newValue);
  }

  function get_onEndedFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onEnded");
  }

  function set_onEndedFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onended', newValue);
  }

  function get_onErrorFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onError");
  }

  function set_onErrorFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onerror', newValue);
  }

  function get_onFocusFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onFocus");
  }

  function set_onFocusFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onfocus', newValue);
  }

  function get_onFormChangeFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onFormChange");
  }

  function set_onFormChangeFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onformchange', newValue);
  }

  function get_onFormInputFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onFormInput");
  }

  function set_onFormInputFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onforminput', newValue);
  }

  function get_onInputFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onInput");
  }

  function set_onInputFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'oninput', newValue);
  }

  function get_onInvalidFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onInvalid");
  }

  function set_onInvalidFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'oninvalid', newValue);
  }

  function get_onKeyDownFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onKeyDown");
  }

  function set_onKeyDownFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onkeydown', newValue);
  }

  function get_onKeyPressFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onKeyPress");
  }

  function set_onKeyPressFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onkeypress', newValue);
  }

  function get_onKeyUpFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onKeyUp");
  }

  function set_onKeyUpFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onkeyup', newValue);
  }

  function get_onLoadFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onLoad");
  }

  function set_onLoadFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onload', newValue);
  }

  function get_onLoadedDataFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onLoadedData");
  }

  function set_onLoadedDataFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onloadeddata', newValue);
  }

  function get_onLoadedMetaDataFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onLoadedMetaData");
  }

  function set_onLoadedMetaDataFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onloadedmetadata', newValue);
  }

  function get_onLoadStartFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onLoadStart");
  }

  function set_onLoadStartFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onloadstart', newValue);
  }

  function get_onMouseDownFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onMouseDown");
  }

  function set_onMouseDownFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onmousedown', newValue);
  }

  function get_onMouseMoveFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onMouseMove");
  }

  function set_onMouseMoveFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onmousemove', newValue);
  }

  function get_onMouseOutFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onMouseOut");
  }

  function set_onMouseOutFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onmouseout', newValue);
  }

  function get_onMouseOverFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onMouseOver");
  }

  function set_onMouseOverFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onmouseover', newValue);
  }

  function get_onMouseUpFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onMouseUp");
  }

  function set_onMouseUpFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onmouseup', newValue);
  }

  function get_onMouseWheelFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onMouseWheel");
  }

  function set_onMouseWheelFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onmousewheel', newValue);
  }

  function get_onPauseFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onPause");
  }

  function set_onPauseFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onpause', newValue);
  }

  function get_onPlayFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onPlay");
  }

  function set_onPlayFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onplay', newValue);
  }

  function get_onPlayingFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onPlaying");
  }

  function set_onPlayingFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onplaying', newValue);
  }

  function get_onProgressFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onProgress");
  }

  function set_onProgressFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onprogress', newValue);
  }

  function get_onRateChangeFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onRateChange");
  }

  function set_onRateChangeFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onratechange', newValue);
  }

  function get_onReadyStateChangeFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onReadyStateChange");
  }

  function set_onReadyStateChangeFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onreadystatechange', newValue);
  }

  function get_onScrollFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onScroll");
  }

  function set_onScrollFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onscroll', newValue);
  }

  function get_onSeekedFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onSeeked");
  }

  function set_onSeekedFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onseeked', newValue);
  }

  function get_onSeekingFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onSeeking");
  }

  function set_onSeekingFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onseeking', newValue);
  }

  function get_onSelectFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onSelect");
  }

  function set_onSelectFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onselect', newValue);
  }

  function get_onShowFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onShow");
  }

  function set_onShowFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onshow', newValue);
  }

  function get_onStalledFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onStalled");
  }

  function set_onStalledFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onstalled', newValue);
  }

  function get_onSubmitFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onSubmit");
  }

  function set_onSubmitFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onsubmit', newValue);
  }

  function get_onSuspendFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onSuspend");
  }

  function set_onSuspendFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onsuspend', newValue);
  }

  function get_onTimeUpdateFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onTimeUpdate");
  }

  function set_onTimeUpdateFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'ontimeupdate', newValue);
  }

  function get_onVolumeChangeFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onVolumeChange");
  }

  function set_onVolumeChangeFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onvolumechange', newValue);
  }

  function get_onWaitingFunction($receiver_17) {
    throw new UnsupportedOperationException("You can't read variable onWaiting");
  }

  function set_onWaitingFunction($receiver_17, newValue) {
    $receiver_17.consumer.onTagEvent_azi6uv$($receiver_17, 'onwaiting', newValue);
  }

  function a$lambda($receiver_17) {
  }

  function a($receiver_17, href, target, classes, block) {
    if (href === void 0)
      href = null;
    if (target === void 0)
      target = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = a$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new A(attributesMapOf(['href', href, 'target', target, 'class', classes]), $receiver_17), $receiver_17, block), HTMLAnchorElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function abbr$lambda($receiver_17) {
  }

  function abbr($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = abbr$lambda;
    return visitAndFinalize(new ABBR(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function address$lambda($receiver_17) {
  }

  function address($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = address$lambda;
    return visitAndFinalize(new ADDRESS(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function area$lambda($receiver_17) {
  }

  function area($receiver_17, shape, alt, classes, block) {
    if (shape === void 0)
      shape = null;
    if (alt === void 0)
      alt = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = area$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new AREA(attributesMapOf(['Shape', shape != null ? enumEncode(shape) : null, 'alt', alt, 'class', classes]), $receiver_17), $receiver_17, block), HTMLAreaElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function article$lambda($receiver_17) {
  }

  function article($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = article$lambda;
    return visitAndFinalize(new ARTICLE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function aside$lambda($receiver_17) {
  }

  function aside($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = aside$lambda;
    return visitAndFinalize(new ASIDE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function audio$lambda($receiver_17) {
  }

  function audio($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = audio$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new AUDIO(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLAudioElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function b$lambda($receiver_17) {
  }

  function b($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = b$lambda;
    return visitAndFinalize(new B(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function base$lambda($receiver_17) {
  }

  function base($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = base$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new BASE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLBaseElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function bdi$lambda($receiver_17) {
  }

  function bdi($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = bdi$lambda;
    return visitAndFinalize(new BDI(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function bdo$lambda($receiver_17) {
  }

  function bdo($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = bdo$lambda;
    return visitAndFinalize(new BDO(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function blockQuote$lambda($receiver_17) {
  }

  function blockQuote($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = blockQuote$lambda;
    return visitAndFinalize(new BLOCKQUOTE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function body$lambda($receiver_17) {
  }

  function body($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = body$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new BODY(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLBodyElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function br$lambda($receiver_17) {
  }

  function br($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = br$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new BR(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLBRElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function button$lambda($receiver_17) {
  }

  function button($receiver_17, formEncType, formMethod, type, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (type === void 0)
      type = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = button$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new BUTTON(attributesMapOf(['formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver_17), $receiver_17, block), HTMLButtonElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function canvas$lambda(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function canvas($receiver_17, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new CANVAS(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, canvas$lambda(content)), HTMLCanvasElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function canvas$lambda_0($receiver_17) {
  }

  function canvas_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = canvas$lambda_0;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new CANVAS(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLCanvasElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function caption$lambda($receiver_17) {
  }

  function caption($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = caption$lambda;
    return visitAndFinalize(new CAPTION(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function cite$lambda($receiver_17) {
  }

  function cite($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = cite$lambda;
    return visitAndFinalize(new CITE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function code$lambda($receiver_17) {
  }

  function code($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = code$lambda;
    return visitAndFinalize(new CODE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function col$lambda($receiver_17) {
  }

  function col($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = col$lambda;
    return visitAndFinalize(new COL(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function colGroup$lambda($receiver_17) {
  }

  function colGroup($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = colGroup$lambda;
    return visitAndFinalize(new COLGROUP(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function command$lambda($receiver_17) {
  }

  function command($receiver_17, type, classes, block) {
    if (type === void 0)
      type = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = command$lambda;
    return visitAndFinalize(new COMMAND(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver_17), $receiver_17, block);
  }

  function dataList$lambda($receiver_17) {
  }

  function dataList($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dataList$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new DATALIST(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLDataListElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function dd$lambda($receiver_17) {
  }

  function dd($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dd$lambda;
    return visitAndFinalize(new DD(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function del$lambda($receiver_17) {
  }

  function del($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = del$lambda;
    return visitAndFinalize(new DEL(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function details$lambda($receiver_17) {
  }

  function details($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = details$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new DETAILS(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLDetailsElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function dfn$lambda($receiver_17) {
  }

  function dfn($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dfn$lambda;
    return visitAndFinalize(new DFN(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function dialog$lambda($receiver_17) {
  }

  function dialog($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dialog$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new DIALOG(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLDialogElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function div$lambda($receiver_17) {
  }

  function div($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = div$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new DIV(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLDivElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function dl$lambda($receiver_17) {
  }

  function dl($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dl$lambda;
    return visitAndFinalize(new DL(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function dt$lambda($receiver_17) {
  }

  function dt($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dt$lambda;
    return visitAndFinalize(new DT(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function em$lambda($receiver_17) {
  }

  function em($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = em$lambda;
    return visitAndFinalize(new EM(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function embed$lambda($receiver_17) {
  }

  function embed($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = embed$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new EMBED(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLEmbedElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function fieldSet$lambda($receiver_17) {
  }

  function fieldSet($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = fieldSet$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new FIELDSET(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLFieldSetElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function figcaption$lambda($receiver_17) {
  }

  function figcaption($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = figcaption$lambda;
    return visitAndFinalize(new FIGCAPTION(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function figure$lambda($receiver_17) {
  }

  function figure($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = figure$lambda;
    return visitAndFinalize(new FIGURE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function footer$lambda($receiver_17) {
  }

  function footer($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = footer$lambda;
    return visitAndFinalize(new FOOTER(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function form$lambda($receiver_17) {
  }

  function form($receiver_17, action, encType, method, classes, block) {
    if (action === void 0)
      action = null;
    if (encType === void 0)
      encType = null;
    if (method === void 0)
      method = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = form$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new FORM(attributesMapOf(['action', action, 'enctype', encType != null ? enumEncode(encType) : null, 'method', method != null ? enumEncode(method) : null, 'class', classes]), $receiver_17), $receiver_17, block), HTMLFormElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function h1$lambda($receiver_17) {
  }

  function h1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h1$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new H1(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLHeadingElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function h2$lambda($receiver_17) {
  }

  function h2($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h2$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new H2(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLHeadingElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function h3$lambda($receiver_17) {
  }

  function h3($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h3$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new H3(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLHeadingElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function h4$lambda($receiver_17) {
  }

  function h4($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h4$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new H4(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLHeadingElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function h5$lambda($receiver_17) {
  }

  function h5($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h5$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new H5(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLHeadingElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function h6$lambda($receiver_17) {
  }

  function h6($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h6$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new H6(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLHeadingElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function head$lambda($receiver_17) {
  }

  function head($receiver_17, block) {
    if (block === void 0)
      block = head$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new HEAD(emptyMap, $receiver_17), $receiver_17, block), HTMLHeadElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function header$lambda($receiver_17) {
  }

  function header($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = header$lambda;
    return visitAndFinalize(new HEADER(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function hGroup$lambda($receiver_17) {
  }

  function hGroup($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = hGroup$lambda;
    return visitAndFinalize(new HGROUP(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function hr$lambda($receiver_17) {
  }

  function hr($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = hr$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new HR(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLHRElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function html$lambda($receiver_17) {
  }

  function html($receiver_17, block) {
    if (block === void 0)
      block = html$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new HTML(emptyMap, $receiver_17), $receiver_17, block), HTMLHtmlElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function i$lambda($receiver_17) {
  }

  function i($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = i$lambda;
    return visitAndFinalize(new I(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function iframe$lambda(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function iframe($receiver_17, sandbox, classes, content) {
    if (sandbox === void 0)
      sandbox = null;
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    return visitAndFinalize(new IFRAME(attributesMapOf(['sandbox', sandbox != null ? enumEncode(sandbox) : null, 'class', classes]), $receiver_17), $receiver_17, iframe$lambda(content));
  }

  function iframe$lambda_0($receiver_17) {
  }

  function iframe_0($receiver_17, sandbox, classes, block) {
    if (sandbox === void 0)
      sandbox = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = iframe$lambda_0;
    return visitAndFinalize(new IFRAME(attributesMapOf(['sandbox', sandbox != null ? enumEncode(sandbox) : null, 'class', classes]), $receiver_17), $receiver_17, block);
  }

  function img$lambda($receiver_17) {
  }

  function img($receiver_17, alt, src, classes, block) {
    if (alt === void 0)
      alt = null;
    if (src === void 0)
      src = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = img$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new IMG(attributesMapOf(['alt', alt, 'src', src, 'class', classes]), $receiver_17), $receiver_17, block), HTMLImageElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function input$lambda($receiver_17) {
  }

  function input($receiver_17, type, formEncType, formMethod, name, classes, block) {
    if (type === void 0)
      type = null;
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = input$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new INPUT(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17), $receiver_17, block), HTMLInputElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function ins$lambda($receiver_17) {
  }

  function ins($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = ins$lambda;
    return visitAndFinalize(new INS(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function kbd$lambda($receiver_17) {
  }

  function kbd($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = kbd$lambda;
    return visitAndFinalize(new KBD(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function keyGen$lambda($receiver_17) {
  }

  function keyGen($receiver_17, keyType, classes, block) {
    if (keyType === void 0)
      keyType = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = keyGen$lambda;
    return visitAndFinalize(new KEYGEN(attributesMapOf(['keytype', keyType != null ? enumEncode(keyType) : null, 'class', classes]), $receiver_17), $receiver_17, block);
  }

  function label$lambda($receiver_17) {
  }

  function label($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = label$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new LABEL(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLLabelElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function legEnd$lambda($receiver_17) {
  }

  function legEnd($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = legEnd$lambda;
    return visitAndFinalize(new LEGEND(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function li$lambda($receiver_17) {
  }

  function li($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = li$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new LI(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLLIElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function link$lambda($receiver_17) {
  }

  function link($receiver_17, href, rel, type, block) {
    if (href === void 0)
      href = null;
    if (rel === void 0)
      rel = null;
    if (type === void 0)
      type = null;
    if (block === void 0)
      block = link$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new LINK(attributesMapOf(['href', href, 'rel', rel, 'type', type]), $receiver_17), $receiver_17, block), HTMLLinkElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function map$lambda($receiver_17) {
  }

  function map_0($receiver_17, name, classes, block) {
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = map$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new MAP(attributesMapOf(['name', name, 'class', classes]), $receiver_17), $receiver_17, block), HTMLMapElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function mark$lambda($receiver_17) {
  }

  function mark($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = mark$lambda;
    return visitAndFinalize(new MARK(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function math$lambda($receiver_17) {
  }

  function math($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = math$lambda;
    return visitAndFinalize(new MATH(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function mathml$lambda(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function mathml($receiver_17, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    return visitAndFinalize(new MATHML(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, mathml$lambda(content));
  }

  function mathml$lambda_0($receiver_17) {
  }

  function mathml_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = mathml$lambda_0;
    return visitAndFinalize(new MATHML(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function meta$lambda($receiver_17) {
  }

  function meta($receiver_17, name, content, block) {
    if (name === void 0)
      name = null;
    if (content === void 0)
      content = null;
    if (block === void 0)
      block = meta$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new META(attributesMapOf(['name', name, 'content', content]), $receiver_17), $receiver_17, block), HTMLMetaElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function meter$lambda($receiver_17) {
  }

  function meter($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = meter$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new METER(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLMeterElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function nav$lambda($receiver_17) {
  }

  function nav($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = nav$lambda;
    return visitAndFinalize(new NAV(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function noScript$lambda($receiver_17) {
  }

  function noScript($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = noScript$lambda;
    return visitAndFinalize(new NOSCRIPT(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function object_$lambda($receiver_17) {
  }

  function object_($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = object_$lambda;
    return visitAndFinalize(new OBJECT_(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function ol$lambda($receiver_17) {
  }

  function ol($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = ol$lambda;
    return visitAndFinalize(new OL(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function optGroup$lambda($receiver_17) {
  }

  function optGroup($receiver_17, label_2, classes, block) {
    if (label_2 === void 0)
      label_2 = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = optGroup$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new OPTGROUP(attributesMapOf(['label', label_2, 'class', classes]), $receiver_17), $receiver_17, block), HTMLOptGroupElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function option$lambda(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function option($receiver_17, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new OPTION(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, option$lambda(content)), HTMLOptionElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function option$lambda_0($receiver_17) {
  }

  function option_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = option$lambda_0;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new OPTION(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLOptionElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function output$lambda($receiver_17) {
  }

  function output($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = output$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new OUTPUT(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLOutputElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function p$lambda($receiver_17) {
  }

  function p($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = p$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new P(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLParagraphElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function param$lambda($receiver_17) {
  }

  function param($receiver_17, name, value, block) {
    if (name === void 0)
      name = null;
    if (value === void 0)
      value = null;
    if (block === void 0)
      block = param$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new PARAM(attributesMapOf(['name', name, 'value', value]), $receiver_17), $receiver_17, block), HTMLParamElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function pre$lambda($receiver_17) {
  }

  function pre($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = pre$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new PRE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLPreElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function progress$lambda($receiver_17) {
  }

  function progress($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = progress$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new PROGRESS(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLProgressElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function q$lambda($receiver_17) {
  }

  function q($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = q$lambda;
    return visitAndFinalize(new Q(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function rp$lambda($receiver_17) {
  }

  function rp($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = rp$lambda;
    return visitAndFinalize(new RP(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function rt$lambda($receiver_17) {
  }

  function rt($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = rt$lambda;
    return visitAndFinalize(new RT(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function ruby$lambda($receiver_17) {
  }

  function ruby($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = ruby$lambda;
    return visitAndFinalize(new RUBY(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function samp$lambda($receiver_17) {
  }

  function samp($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = samp$lambda;
    return visitAndFinalize(new SAMP(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function script$lambda($receiver_17) {
  }

  function script($receiver_17, type, src, block) {
    if (type === void 0)
      type = null;
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = script$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new SCRIPT(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'src', src]), $receiver_17), $receiver_17, block), HTMLScriptElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function section$lambda($receiver_17) {
  }

  function section($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = section$lambda;
    return visitAndFinalize(new SECTION(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function select$lambda($receiver_17) {
  }

  function select($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = select$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new SELECT(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLSelectElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function small$lambda($receiver_17) {
  }

  function small($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = small$lambda;
    return visitAndFinalize(new SMALL(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function source$lambda($receiver_17) {
  }

  function source($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = source$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new SOURCE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLSourceElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function span$lambda($receiver_17) {
  }

  function span($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = span$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new SPAN(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLSpanElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function strong$lambda($receiver_17) {
  }

  function strong($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = strong$lambda;
    return visitAndFinalize(new STRONG(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function style$lambda(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function style($receiver_17, type, content) {
    if (type === void 0)
      type = null;
    if (content === void 0)
      content = '';
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new STYLE(attributesMapOf_0('type', type), $receiver_17), $receiver_17, style$lambda(content)), HTMLStyleElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function style$lambda_0($receiver_17) {
  }

  function style_0($receiver_17, type, block) {
    if (type === void 0)
      type = null;
    if (block === void 0)
      block = style$lambda_0;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new STYLE(attributesMapOf_0('type', type), $receiver_17), $receiver_17, block), HTMLStyleElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function sub$lambda($receiver_17) {
  }

  function sub($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = sub$lambda;
    return visitAndFinalize(new SUB(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function sup$lambda($receiver_17) {
  }

  function sup($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = sup$lambda;
    return visitAndFinalize(new SUP(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function svg$lambda(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function svg($receiver_17, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    return visitAndFinalize(new SVG(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, svg$lambda(content));
  }

  function svg$lambda_0($receiver_17) {
  }

  function svg_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = svg$lambda_0;
    return visitAndFinalize(new SVG(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function table$lambda($receiver_17) {
  }

  function table($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = table$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new TABLE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLTableElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function tbody$lambda($receiver_17) {
  }

  function tbody($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = tbody$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new TBODY(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLTableSectionElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function td$lambda($receiver_17) {
  }

  function td($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = td$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new TD(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLTableCellElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function textArea$lambda(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function textArea($receiver_17, rows, cols, wrap, classes, content) {
    if (rows === void 0)
      rows = null;
    if (cols === void 0)
      cols = null;
    if (wrap === void 0)
      wrap = null;
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new TEXTAREA(attributesMapOf(['rows', rows, 'cols', cols, 'wrap', wrap != null ? enumEncode(wrap) : null, 'class', classes]), $receiver_17), $receiver_17, textArea$lambda(content)), HTMLTextAreaElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function textArea$lambda_0($receiver_17) {
  }

  function textArea_0($receiver_17, rows, cols, wrap, classes, block) {
    if (rows === void 0)
      rows = null;
    if (cols === void 0)
      cols = null;
    if (wrap === void 0)
      wrap = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = textArea$lambda_0;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new TEXTAREA(attributesMapOf(['rows', rows, 'cols', cols, 'wrap', wrap != null ? enumEncode(wrap) : null, 'class', classes]), $receiver_17), $receiver_17, block), HTMLTextAreaElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function tfoot$lambda($receiver_17) {
  }

  function tfoot($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = tfoot$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new TFOOT(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLTableSectionElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function th$lambda($receiver_17) {
  }

  function th($receiver_17, scope, classes, block) {
    if (scope === void 0)
      scope = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = th$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new TH(attributesMapOf(['scope', scope != null ? enumEncode(scope) : null, 'class', classes]), $receiver_17), $receiver_17, block), HTMLTableColElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function thead$lambda($receiver_17) {
  }

  function thead($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = thead$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new THEAD(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLTableSectionElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function time$lambda($receiver_17) {
  }

  function time($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = time$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new TIME(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLTimeElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function title$lambda(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function title($receiver_17, content) {
    if (content === void 0)
      content = '';
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new TITLE(emptyMap, $receiver_17), $receiver_17, title$lambda(content)), HTMLTitleElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function title$lambda_0($receiver_17) {
  }

  function title_0($receiver_17, block) {
    if (block === void 0)
      block = title$lambda_0;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new TITLE(emptyMap, $receiver_17), $receiver_17, block), HTMLTitleElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function tr$lambda($receiver_17) {
  }

  function tr($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = tr$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new TR(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLTableRowElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function ul$lambda($receiver_17) {
  }

  function ul($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = ul$lambda;
    return visitAndFinalize(new UL(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function var_$lambda($receiver_17) {
  }

  function var_($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = var_$lambda;
    return visitAndFinalize(new VAR_(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function video$lambda($receiver_17) {
  }

  function video($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = video$lambda;
    var tmp$_17;
    return Kotlin.isType(tmp$_17 = visitAndFinalize(new VIDEO(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block), HTMLVideoElement) ? tmp$_17 : Kotlin.throwCCE();
  }

  function trace$lambda(it) {
    console.info(it);
  }

  function trace($receiver_17) {
    return trace_0($receiver_17, trace$lambda);
  }

  function DelayedConsumer(downstream) {
    this.downstream = downstream;
    this.delayed_0 = null;
  }

  DelayedConsumer.prototype.onTagStart_tkgjla$ = function(tag) {
    this.processDelayedTag_0();
    this.delayed_0 = tag;
  };
  DelayedConsumer.prototype.onTagAttributeChange_5n2z71$ = function(tag, attribute, value) {
    if (this.delayed_0 == null || !Kotlin.equals(this.delayed_0, tag)) {
      throw new IllegalStateException("You can't change tag attribute because it was already passed to the downstream");
    }
  };
  DelayedConsumer.prototype.onTagEvent_azi6uv$ = function(tag, event, value) {
    if (this.delayed_0 == null || !Kotlin.equals(this.delayed_0, tag)) {
      throw new IllegalStateException("You can't change tag attribute because it was already passed to the downstream");
    }
  };
  DelayedConsumer.prototype.onTagEnd_tkgjla$ = function(tag) {
    this.processDelayedTag_0();
    this.downstream.onTagEnd_tkgjla$(tag);
  };
  DelayedConsumer.prototype.onTagContent_6bul2c$ = function(content) {
    this.processDelayedTag_0();
    this.downstream.onTagContent_6bul2c$(content);
  };
  DelayedConsumer.prototype.onTagContentEntity_ws8or7$ = function(entity) {
    this.processDelayedTag_0();
    this.downstream.onTagContentEntity_ws8or7$(entity);
  };
  DelayedConsumer.prototype.onTagError_cjwpn3$ = function(tag, exception) {
    this.processDelayedTag_0();
    this.downstream.onTagError_cjwpn3$(tag, exception);
  };
  DelayedConsumer.prototype.finalize = function() {
    this.processDelayedTag_0();
    return this.downstream.finalize();
  };
  DelayedConsumer.prototype.onTagContentUnsafe_kntra7$ = function(block) {
    this.processDelayedTag_0();
    return this.downstream.onTagContentUnsafe_kntra7$(block);
  };
  DelayedConsumer.prototype.processDelayedTag_0 = function() {
    var tmp$_17;
    if ((tmp$_17 = this.delayed_0) != null) {
      this.delayed_0 = null;
      this.downstream.onTagStart_tkgjla$(tmp$_17);
    }
  };
  DelayedConsumer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DelayedConsumer',
    interfaces: [TagConsumer]
  };

  function delayed($receiver_17) {
    return Kotlin.isType($receiver_17, DelayedConsumer) ? $receiver_17 : new DelayedConsumer($receiver_17);
  }

  function DelegatingMap(initialValues, tag, consumer) {
    this.tag = tag;
    this.consumer = consumer;
    this.backing_0 = initialValues;
    this.backingMutable_0 = false;
  }

  Object.defineProperty(DelegatingMap.prototype, 'size', {
    get: function() {
      return this.backing_0.size;
    }
  });
  DelegatingMap.prototype.isEmpty = function() {
    return this.backing_0.isEmpty();
  };
  DelegatingMap.prototype.containsKey_11rb$ = function(key) {
    return this.backing_0.containsKey_11rb$(key);
  };
  DelegatingMap.prototype.containsValue_11rc$ = function(value) {
    return this.backing_0.containsValue_11rc$(value);
  };
  DelegatingMap.prototype.get_11rb$ = function(key) {
    return this.backing_0.get_11rb$(key);
  };
  DelegatingMap.prototype.put_xwzc9p$ = function(key, value) {
    var mutable = this.switchToMutable_0();
    var old = mutable.put_xwzc9p$(key, value);
    if (!Kotlin.equals(old, value)) {
      this.consumer().onTagAttributeChange_5n2z71$(this.tag, key, value);
    }
    return old;
  };
  DelegatingMap.prototype.remove_11rb$ = function(key) {
    var tmp$_17;
    var mutable = this.switchToMutable_0();
    var tmp$_18;
    if ((tmp$_17 = mutable.remove_11rb$(key)) != null) {
      if (typeof key === 'string') {
        this.consumer().onTagAttributeChange_5n2z71$(this.tag, key, null);
      }
      tmp$_18 = tmp$_17;
    }
    else
      tmp$_18 = null;
    return tmp$_18;
  };
  DelegatingMap.prototype.putAll_a2k3zr$ = function(from) {
    var tmp$_17;
    tmp$_17 = from.entries.iterator();
    while (tmp$_17.hasNext()) {
      var element_17 = tmp$_17.next();
      this.put_xwzc9p$(element_17.key, element_17.value);
    }
  };
  DelegatingMap.prototype.clear = function() {
    var tmp$_17;
    tmp$_17 = this.backing_0.entries.iterator();
    while (tmp$_17.hasNext()) {
      var element_17 = tmp$_17.next();
      this.consumer().onTagAttributeChange_5n2z71$(this.tag, element_17.key, null);
    }
    this.backing_0 = emptyMap_0();
    this.backingMutable_0 = false;
  };
  Object.defineProperty(DelegatingMap.prototype, 'immutableEntries', {
    get: function() {
      return this.backing_0.entries;
    }
  });
  DelegatingMap.prototype.switchToMutable_0 = function() {
    var tmp$_17, tmp$_18;
    if (this.backingMutable_0) {
      tmp$_17 = this.backing_0;
    }
    else {
      this.backingMutable_0 = true;
      this.backing_0 = LinkedHashMap_init(this.backing_0);
      tmp$_17 = this.backing_0;
    }
    return Kotlin.isType(tmp$_18 = tmp$_17, MutableMap) ? tmp$_18 : Kotlin.throwCCE();
  };
  Object.defineProperty(DelegatingMap.prototype, 'keys', {
    get: function() {
      return this.switchToMutable_0().keys;
    }
  });
  Object.defineProperty(DelegatingMap.prototype, 'values', {
    get: function() {
      return this.switchToMutable_0().values;
    }
  });
  Object.defineProperty(DelegatingMap.prototype, 'entries', {
    get: function() {
      return this.switchToMutable_0().entries;
    }
  });
  DelegatingMap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DelegatingMap',
    interfaces: [MutableMap]
  };

  function DelegatingExceptionConsumer(underlying, handler) {
    this.underlying = underlying;
    this.handler = handler;
  }

  DelegatingExceptionConsumer.prototype.onTagError_cjwpn3$ = function(tag, exception) {
    this.handler(this.underlying, exception);
  };
  DelegatingExceptionConsumer.prototype.finalize = function() {
    return this.underlying.finalize();
  };
  DelegatingExceptionConsumer.prototype.onTagAttributeChange_5n2z71$ = function(tag, attribute, value) {
    return this.underlying.onTagAttributeChange_5n2z71$(tag, attribute, value);
  };
  DelegatingExceptionConsumer.prototype.onTagContent_6bul2c$ = function(content) {
    return this.underlying.onTagContent_6bul2c$(content);
  };
  DelegatingExceptionConsumer.prototype.onTagContentEntity_ws8or7$ = function(entity) {
    return this.underlying.onTagContentEntity_ws8or7$(entity);
  };
  DelegatingExceptionConsumer.prototype.onTagContentUnsafe_kntra7$ = function(block) {
    return this.underlying.onTagContentUnsafe_kntra7$(block);
  };
  DelegatingExceptionConsumer.prototype.onTagEnd_tkgjla$ = function(tag) {
    return this.underlying.onTagEnd_tkgjla$(tag);
  };
  DelegatingExceptionConsumer.prototype.onTagEvent_azi6uv$ = function(tag, event, value) {
    return this.underlying.onTagEvent_azi6uv$(tag, event, value);
  };
  DelegatingExceptionConsumer.prototype.onTagStart_tkgjla$ = function(tag) {
    return this.underlying.onTagStart_tkgjla$(tag);
  };
  DelegatingExceptionConsumer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DelegatingExceptionConsumer',
    interfaces: [TagConsumer]
  };

  function catch_0($receiver_17, handler) {
    return new DelegatingExceptionConsumer($receiver_17, handler);
  }

  function TimedResult(result, time_2) {
    this.result = result;
    this.time = time_2;
  }

  TimedResult.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TimedResult',
    interfaces: []
  };
  TimedResult.prototype.component1 = function() {
    return this.result;
  };
  TimedResult.prototype.component2 = function() {
    return this.time;
  };
  TimedResult.prototype.copy_19wkf8$ = function(result, time_2) {
    return new TimedResult(result === void 0 ? this.result : result, time_2 === void 0 ? this.time : time_2);
  };
  TimedResult.prototype.toString = function() {
    return 'TimedResult(result=' + Kotlin.toString(this.result) + (', time=' + Kotlin.toString(this.time)) + ')';
  };
  TimedResult.prototype.hashCode = function() {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.result) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    return result;
  };
  TimedResult.prototype.equals = function(other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.result, other.result) && Kotlin.equals(this.time, other.time)))));
  };

  function get_out($receiver_17) {
    return $receiver_17.result;
  }

  function TimeMeasureConsumer(downstream) {
    this.downstream = downstream;
    this.start_0 = currentTimeMillis();
  }

  TimeMeasureConsumer.prototype.onTagStart_tkgjla$ = function(tag) {
    this.downstream.onTagStart_tkgjla$(tag);
  };
  TimeMeasureConsumer.prototype.onTagAttributeChange_5n2z71$ = function(tag, attribute, value) {
    this.downstream.onTagAttributeChange_5n2z71$(tag, attribute, value);
  };
  TimeMeasureConsumer.prototype.onTagEvent_azi6uv$ = function(tag, event, value) {
    this.downstream.onTagEvent_azi6uv$(tag, event, value);
  };
  TimeMeasureConsumer.prototype.onTagEnd_tkgjla$ = function(tag) {
    this.downstream.onTagEnd_tkgjla$(tag);
  };
  TimeMeasureConsumer.prototype.onTagContent_6bul2c$ = function(content) {
    this.downstream.onTagContent_6bul2c$(content);
  };
  TimeMeasureConsumer.prototype.onTagContentEntity_ws8or7$ = function(entity) {
    this.downstream.onTagContentEntity_ws8or7$(entity);
  };
  TimeMeasureConsumer.prototype.onTagContentUnsafe_kntra7$ = function(block) {
    this.downstream.onTagContentUnsafe_kntra7$(block);
  };
  TimeMeasureConsumer.prototype.onTagError_cjwpn3$ = function(tag, exception) {
    this.downstream.onTagError_cjwpn3$(tag, exception);
  };
  TimeMeasureConsumer.prototype.finalize = function() {
    return new TimedResult(this.downstream.finalize(), currentTimeMillis().subtract(this.start_0));
  };
  TimeMeasureConsumer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TimeMeasureConsumer',
    interfaces: [TagConsumer]
  };

  function measureTime($receiver_17) {
    return new TimeMeasureConsumer($receiver_17);
  }

  function AttributeEncoder() {
  }

  AttributeEncoder.prototype.empty_l5rr1g$ = function(attributeName, tag) {
    throw new IllegalStateException('Attribute ' + attributeName + ' is not yet defined for tag ' + tag.tagName);
  };
  AttributeEncoder.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'AttributeEncoder',
    interfaces: []
  };

  function Attribute(encoder) {
    this.encoder = encoder;
  }

  Attribute.prototype.get_txhc1s$ = function(thisRef, attributeName) {
    var tmp$_17, tmp$_18;
    return (tmp$_18 = (tmp$_17 = thisRef.attributes.get_11rb$(attributeName)) != null ? this.encoder.decode_puj7f4$(attributeName, tmp$_17) : null) != null ? tmp$_18 : this.encoder.empty_l5rr1g$(attributeName, thisRef);
  };
  Attribute.prototype.set_fid0sb$ = function(thisRef, attributeName, value) {
    thisRef.attributes.put_xwzc9p$(attributeName, this.encoder.encode_yuqcw7$(attributeName, value));
  };
  Attribute.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Attribute',
    interfaces: []
  };

  function StringEncoder() {
    StringEncoder_instance = this;
  }

  StringEncoder.prototype.encode_yuqcw7$ = function(attributeName, value) {
    return value;
  };
  StringEncoder.prototype.decode_puj7f4$ = function(attributeName, value) {
    return value;
  };
  StringEncoder.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'StringEncoder',
    interfaces: [AttributeEncoder]
  };
  var StringEncoder_instance = null;

  function StringEncoder_getInstance() {
    if (StringEncoder_instance === null) {
      new StringEncoder();
    }
    return StringEncoder_instance;
  }

  function StringAttribute() {
    Attribute.call(this, StringEncoder_getInstance());
  }

  StringAttribute.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'StringAttribute',
    interfaces: [Attribute]
  };

  function booleanEncode($receiver_17) {
    return $receiver_17.toString();
  }

  function BooleanEncoder(trueValue, falseValue) {
    if (trueValue === void 0)
      trueValue = 'true';
    if (falseValue === void 0)
      falseValue = 'false';
    this.trueValue = trueValue;
    this.falseValue = falseValue;
  }

  BooleanEncoder.prototype.encode_yuqcw7$ = function(attributeName, value) {
    return value ? this.trueValue : this.falseValue;
  };
  BooleanEncoder.prototype.decode_puj7f4$ = function(attributeName, value) {
    if (Kotlin.equals(value, this.trueValue))
      return true;
    else if (Kotlin.equals(value, this.falseValue))
      return false;
    else
      throw new IllegalArgumentException('Unknown value ' + value + ' for ' + attributeName);
  };
  BooleanEncoder.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BooleanEncoder',
    interfaces: [AttributeEncoder]
  };

  function BooleanAttribute(trueValue, falseValue) {
    if (trueValue === void 0)
      trueValue = 'true';
    if (falseValue === void 0)
      falseValue = 'false';
    Attribute.call(this, new BooleanEncoder(trueValue, falseValue));
  }

  BooleanAttribute.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BooleanAttribute',
    interfaces: [Attribute]
  };

  function tickerEncode($receiver_17, attributeName) {
    return $receiver_17 ? attributeName : '';
  }

  function TickerEncoder() {
    TickerEncoder_instance = this;
  }

  TickerEncoder.prototype.encode_yuqcw7$ = function(attributeName, value) {
    return tickerEncode(value, attributeName);
  };
  TickerEncoder.prototype.decode_puj7f4$ = function(attributeName, value) {
    return Kotlin.equals(value, attributeName);
  };
  TickerEncoder.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'TickerEncoder',
    interfaces: [AttributeEncoder]
  };
  var TickerEncoder_instance = null;

  function TickerEncoder_getInstance() {
    if (TickerEncoder_instance === null) {
      new TickerEncoder();
    }
    return TickerEncoder_instance;
  }

  function TickerAttribute() {
    Attribute.call(this, TickerEncoder_getInstance());
  }

  TickerAttribute.prototype.set_fid0sb$ = function(thisRef, attributeName, value) {
    if (value) {
      thisRef.attributes.put_xwzc9p$(attributeName, attributeName);
    }
    else {
      thisRef.attributes.remove_11rb$(attributeName);
    }
  };
  TickerAttribute.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TickerAttribute',
    interfaces: [Attribute]
  };

  function EnumEncoder(valuesMap) {
    this.valuesMap = valuesMap;
  }

  EnumEncoder.prototype.encode_yuqcw7$ = function(attributeName, value) {
    return value.realValue;
  };
  EnumEncoder.prototype.decode_puj7f4$ = function(attributeName, value) {
    var tmp$_17;
    tmp$_17 = this.valuesMap.get_11rb$(value);
    if (tmp$_17 == null) {
      throw new IllegalArgumentException('Unknown value ' + value + ' for ' + attributeName);
    }
    return tmp$_17;
  };
  EnumEncoder.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'EnumEncoder',
    interfaces: [AttributeEncoder]
  };

  function enumEncode($receiver_17) {
    return $receiver_17.realValue;
  }

  function EnumAttribute(values) {
    Attribute.call(this, new EnumEncoder(values));
    this.values = values;
  }

  EnumAttribute.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'EnumAttribute',
    interfaces: [Attribute]
  };

  function stringSetDecode(value) {
    var tmp$_17, tmp$_18;
    var tmp$_19;
    if (value != null) {
      var regex = Kotlin.kotlin.text.Regex_61zpoe$('\\s+');
      var limit;
      if (limit === void 0) {
        limit = 0;
      }
      tmp$_19 = regex.split_905azu$(value, limit);
    }
    else
      tmp$_19 = null;
    var tmp$_20;
    if ((tmp$_17 = tmp$_19) != null) {
      var destination_17 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
      var tmp$_21;
      tmp$_21 = tmp$_17.iterator();
      while (tmp$_21.hasNext()) {
        var element_17 = tmp$_21.next();
        if (!(element_17.length === 0)) {
          destination_17.add_11rb$(element_17);
        }
      }
      tmp$_20 = destination_17;
    }
    else
      tmp$_20 = null;
    return (tmp$_18 = tmp$_20) != null ? toSet(tmp$_18) : null;
  }

  function stringSetEncode($receiver_17) {
    return joinToString($receiver_17, ' ');
  }

  function StringSetEncoder() {
    StringSetEncoder_instance = this;
  }

  StringSetEncoder.prototype.encode_yuqcw7$ = function(attributeName, value) {
    return joinToString(value, ' ');
  };
  StringSetEncoder.prototype.decode_puj7f4$ = function(attributeName, value) {
    var tmp$_17;
    return (tmp$_17 = stringSetDecode(value)) != null ? tmp$_17 : Kotlin.throwNPE();
  };
  StringSetEncoder.prototype.empty_l5rr1g$ = function(attributeName, tag) {
    return emptySet();
  };
  StringSetEncoder.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'StringSetEncoder',
    interfaces: [AttributeEncoder]
  };
  var StringSetEncoder_instance = null;

  function StringSetEncoder_getInstance() {
    if (StringSetEncoder_instance === null) {
      new StringSetEncoder();
    }
    return StringSetEncoder_instance;
  }

  function StringSetAttribute() {
    Attribute.call(this, StringSetEncoder_getInstance());
  }

  StringSetAttribute.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'StringSetAttribute',
    interfaces: [Attribute]
  };

  function HTMLStreamBuilder(out, prettyPrint) {
    this.out = out;
    this.prettyPrint = prettyPrint;
    this.level_0 = 0;
    this.ln_0 = true;
    this.UnsafeImpl = new HTMLStreamBuilder$UnsafeImpl$ObjectLiteral(this);
  }

  HTMLStreamBuilder.prototype.onTagStart_tkgjla$ = function(tag) {
    if (this.prettyPrint && !tag.inlineTag) {
      this.indent_0();
    }
    this.level_0 = this.level_0 + 1 | 0;
    this.out.append_gw00v9$('<');
    this.out.append_gw00v9$(tag.tagName);
    if (tag.namespace != null) {
      this.out.append_gw00v9$(' xmlns="');
      this.out.append_gw00v9$(tag.namespace);
      this.out.append_gw00v9$('"');
    }
    if (!tag.attributes.isEmpty()) {
      var tmp$_17, tmp$_18;
      var index = 0;
      tmp$_17 = tag.attributesEntries.iterator();
      while (tmp$_17.hasNext()) {
        var item = tmp$_17.next();
        index = index + 1 | 0;
        if (!isValidXmlAttributeName(item.key)) {
          throw new IllegalArgumentException('Tag ' + tag.tagName + ' has invalid attribute name ' + item.key);
        }
        this.out.append_s8itvh$(32);
        this.out.append_gw00v9$(item.key);
        this.out.append_gw00v9$('="');
        escapeAppend(this.out, item.value);
        this.out.append_s8itvh$(34);
      }
    }
    this.out.append_gw00v9$('>');
    this.ln_0 = false;
  };
  HTMLStreamBuilder.prototype.onTagAttributeChange_5n2z71$ = function(tag, attribute, value) {
    throw new UnsupportedOperationException("tag attribute can't be changed as it was already written to the stream. Use with DelayedConsumer to be able to modify attributes");
  };
  HTMLStreamBuilder.prototype.onTagEvent_azi6uv$ = function(tag, event, value) {
    throw new UnsupportedOperationException("you can't assign lambda event handler when building text");
  };
  HTMLStreamBuilder.prototype.onTagEnd_tkgjla$ = function(tag) {
    this.level_0 = this.level_0 - 1 | 0;
    if (this.ln_0) {
      this.indent_0();
    }
    if (!tag.emptyTag) {
      this.out.append_gw00v9$('<\/');
      this.out.append_gw00v9$(tag.tagName);
      this.out.append_gw00v9$('>');
    }
    if (this.prettyPrint && !tag.inlineTag) {
      this.appenln_0();
    }
  };
  HTMLStreamBuilder.prototype.onTagContent_6bul2c$ = function(content) {
    escapeAppend(this.out, content);
    this.ln_0 = false;
  };
  HTMLStreamBuilder.prototype.onTagContentEntity_ws8or7$ = function(entity) {
    this.out.append_gw00v9$(entity.text);
    this.ln_0 = false;
  };
  HTMLStreamBuilder.prototype.finalize = function() {
    return this.out;
  };
  HTMLStreamBuilder.prototype.onTagContentUnsafe_kntra7$ = function(block) {
    block(this.UnsafeImpl);
  };
  HTMLStreamBuilder.prototype.appenln_0 = function() {
    if (this.prettyPrint && !this.ln_0) {
      this.out.append_gw00v9$('\n');
      this.ln_0 = true;
    }
  };
  HTMLStreamBuilder.prototype.indent_0 = function() {
    if (this.prettyPrint) {
      if (!this.ln_0) {
        this.out.append_gw00v9$('\n');
      }
      var remaining = this.level_0;
      while (remaining >= 4) {
        this.out.append_gw00v9$('        ');
        remaining = remaining - 4 | 0;
      }
      while (remaining >= 2) {
        this.out.append_gw00v9$('    ');
        remaining = remaining - 2 | 0;
      }
      if (remaining > 0) {
        this.out.append_gw00v9$('  ');
      }
      this.ln_0 = false;
    }
  };

  function HTMLStreamBuilder$UnsafeImpl$ObjectLiteral(this$HTMLStreamBuilder) {
    this.this$HTMLStreamBuilder = this$HTMLStreamBuilder;
  }

  HTMLStreamBuilder$UnsafeImpl$ObjectLiteral.prototype.unaryPlus_pdl1vz$ = function($receiver_17) {
    this.this$HTMLStreamBuilder.out.append_gw00v9$($receiver_17);
  };
  HTMLStreamBuilder$UnsafeImpl$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [Unsafe]
  };
  HTMLStreamBuilder.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HTMLStreamBuilder',
    interfaces: [TagConsumer]
  };
  var AVERAGE_PAGE_SIZE;

  function createHTML$lambda(sb, f) {
    return sb.toString();
  }

  function createHTML(prettyPrint) {
    if (prettyPrint === void 0)
      prettyPrint = true;
    return delayed(onFinalizeMap(new HTMLStreamBuilder(StringBuilder_init(AVERAGE_PAGE_SIZE), prettyPrint), createHTML$lambda));
  }

  function appendHTML($receiver_17, prettyPrint) {
    if (prettyPrint === void 0)
      prettyPrint = true;
    return delayed(new HTMLStreamBuilder($receiver_17, prettyPrint));
  }

  var escapeMap;
  var letterRangeLowerCase;
  var letterRangeUpperCase;
  var digitRange;

  function _isLetter($receiver_17) {
    return letterRangeLowerCase.contains_mef7kx$(Kotlin.unboxChar($receiver_17)) || letterRangeUpperCase.contains_mef7kx$(Kotlin.unboxChar($receiver_17));
  }

  function _isDigit($receiver_17) {
    return digitRange.contains_mef7kx$(Kotlin.unboxChar($receiver_17));
  }

  function isValidXmlAttributeName($receiver_17) {
    var tmp$_17 = !startsWithXml($receiver_17);
    if (tmp$_17) {
      tmp$_17 = $receiver_17.length > 0;
    }
    var tmp$_18 = tmp$_17 && (_isLetter(Kotlin.unboxChar($receiver_17.charCodeAt(0))) || Kotlin.unboxChar($receiver_17.charCodeAt(0)) === 95);
    if (tmp$_18) {
      var all$result;
      all$break: {
        var tmp$_19;
        tmp$_19 = Kotlin.kotlin.text.iterator_gw00vp$($receiver_17);
        while (tmp$_19.hasNext()) {
          var element_17 = tmp$_19.next();
          var it = Kotlin.toBoxedChar(element_17);
          if (!(_isLetter(Kotlin.unboxChar(it)) || _isDigit(Kotlin.unboxChar(it)) || contains('._:-', Kotlin.unboxChar(it)))) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
      tmp$_18 = all$result;
    }
    return tmp$_18;
  }

  function startsWithXml($receiver_17) {
    var tmp$_17 = $receiver_17.length >= 3;
    if (tmp$_17) {
      var it = Kotlin.toBoxedChar($receiver_17.charCodeAt(0));
      tmp$_17 = Kotlin.unboxChar(it) === 120 || Kotlin.unboxChar(it) === 88;
    }
    var tmp$_18 = tmp$_17;
    if (tmp$_18) {
      var it_0 = Kotlin.toBoxedChar($receiver_17.charCodeAt(1));
      tmp$_18 = Kotlin.unboxChar(it_0) === 109 || Kotlin.unboxChar(it_0) === 77;
    }
    var tmp$_19 = tmp$_18;
    if (tmp$_19) {
      var it_1 = Kotlin.toBoxedChar($receiver_17.charCodeAt(2));
      tmp$_19 = Kotlin.unboxChar(it_1) === 108 || Kotlin.unboxChar(it_1) === 76;
    }
    return tmp$_19;
  }

  function escapeAppend($receiver_17, s) {
    var tmp$_17;
    var lastIndex = 0;
    tmp$_17 = s.length - 1 | 0;
    for (var idx = 0; idx <= tmp$_17; idx++) {
      var ch = Kotlin.unboxChar(s.charCodeAt(idx));
      var escape = escapeMap.get_11rb$(Kotlin.toBoxedChar(ch));
      if (escape != null) {
        var startIndex = lastIndex;
        var endIndex = idx;
        if (endIndex === void 0) {
          endIndex = s.length;
        }
        $receiver_17.append_gw00v9$(Kotlin.subSequence(s, startIndex, endIndex).toString());
        $receiver_17.append_gw00v9$(escape);
        lastIndex = idx + 1 | 0;
      }
    }
    if (lastIndex < s.length) {
      var startIndex_0 = lastIndex;
      var endIndex_0 = s.length;
      if (endIndex_0 === void 0) {
        endIndex_0 = s.length;
      }
      $receiver_17.append_gw00v9$(Kotlin.subSequence(s, startIndex_0, endIndex_0).toString());
    }
  }

  function UL(initialAttributes, consumer) {
    HTMLTag.call(this, 'ul', consumer, initialAttributes, null, false, false);
    this.consumer_tkgjsn$_0 = consumer;
  }

  Object.defineProperty(UL.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkgjsn$_0;
    }
  });
  UL.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'UL',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function li$lambda_0($receiver_17) {
  }

  function li_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = li$lambda_0;
    visit(new LI(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function OBJECT_(initialAttributes, consumer) {
    HTMLTag.call(this, 'object', consumer, initialAttributes, null, true, false);
    this.consumer_fcnfuu$_0 = consumer;
  }

  Object.defineProperty(OBJECT_.prototype, 'consumer', {
    get: function() {
      return this.consumer_fcnfuu$_0;
    }
  });
  Object.defineProperty(OBJECT_.prototype, 'data', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'data');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'data', newValue);
    }
  });
  Object.defineProperty(OBJECT_.prototype, 'type', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'type');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'type', newValue);
    }
  });
  Object.defineProperty(OBJECT_.prototype, 'height', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'height');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'height', newValue);
    }
  });
  Object.defineProperty(OBJECT_.prototype, 'width', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'width');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'width', newValue);
    }
  });
  Object.defineProperty(OBJECT_.prototype, 'usemap', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'usemap');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'usemap', newValue);
    }
  });
  Object.defineProperty(OBJECT_.prototype, 'name', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  Object.defineProperty(OBJECT_.prototype, 'form', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(OBJECT_.prototype, 'classId', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'classid');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'classid', newValue);
    }
  });
  OBJECT_.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'OBJECT_',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };

  function param$lambda_0($receiver_17) {
  }

  function param_0($receiver_17, name, value, block) {
    if (name === void 0)
      name = null;
    if (value === void 0)
      value = null;
    if (block === void 0)
      block = param$lambda_0;
    visit(new PARAM(attributesMapOf(['name', name, 'value', value]), $receiver_17.consumer), block);
  }

  function get_asFlowContent($receiver_17) {
    return $receiver_17;
  }

  function get_asInteractiveContent($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent($receiver_17) {
    return $receiver_17;
  }

  function OL(initialAttributes, consumer) {
    HTMLTag.call(this, 'ol', consumer, initialAttributes, null, false, false);
    this.consumer_tkgfch$_0 = consumer;
  }

  Object.defineProperty(OL.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkgfch$_0;
    }
  });
  Object.defineProperty(OL.prototype, 'start', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'start');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'start', newValue);
    }
  });
  Object.defineProperty(OL.prototype, 'reversed', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'reversed');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'reversed', newValue);
    }
  });
  OL.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'OL',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function li$lambda_1($receiver_17) {
  }

  function li_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = li$lambda_1;
    visit(new LI(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function OPTGROUP(initialAttributes, consumer) {
    HTMLTag.call(this, 'optgroup', consumer, initialAttributes, null, true, false);
    this.consumer_wxk4w2$_0 = consumer;
  }

  Object.defineProperty(OPTGROUP.prototype, 'consumer', {
    get: function() {
      return this.consumer_wxk4w2$_0;
    }
  });
  Object.defineProperty(OPTGROUP.prototype, 'disabled', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(OPTGROUP.prototype, 'label', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'label');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'label', newValue);
    }
  });
  OPTGROUP.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'OPTGROUP',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };

  function option$lambda_1($receiver_17) {
  }

  function option_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = option$lambda_1;
    visit(new OPTION(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function option$lambda_2(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function option_2($receiver_17, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    visit(new OPTION(attributesMapOf_0('class', classes), $receiver_17.consumer), option$lambda_2(content));
  }

  function OPTION(initialAttributes, consumer) {
    HTMLTag.call(this, 'option', consumer, initialAttributes, null, true, false);
    this.consumer_ossgrr$_0 = consumer;
  }

  Object.defineProperty(OPTION.prototype, 'consumer', {
    get: function() {
      return this.consumer_ossgrr$_0;
    }
  });
  Object.defineProperty(OPTION.prototype, 'disabled', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(OPTION.prototype, 'selected', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'selected');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'selected', newValue);
    }
  });
  Object.defineProperty(OPTION.prototype, 'label', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'label');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'label', newValue);
    }
  });
  Object.defineProperty(OPTION.prototype, 'value', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'value');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'value', newValue);
    }
  });
  OPTION.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'OPTION',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };

  function OUTPUT(initialAttributes, consumer) {
    HTMLTag.call(this, 'output', consumer, initialAttributes, null, true, false);
    this.consumer_mffrar$_0 = consumer;
  }

  Object.defineProperty(OUTPUT.prototype, 'consumer', {
    get: function() {
      return this.consumer_mffrar$_0;
    }
  });
  Object.defineProperty(OUTPUT.prototype, 'for_', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'for');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'for', newValue);
    }
  });
  Object.defineProperty(OUTPUT.prototype, 'form', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(OUTPUT.prototype, 'name', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  OUTPUT.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'OUTPUT',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_0($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_0($receiver_17) {
    return $receiver_17;
  }

  function I(initialAttributes, consumer) {
    HTMLTag.call(this, 'i', consumer, initialAttributes, null, true, false);
    this.consumer_lkq38d$_0 = consumer;
  }

  Object.defineProperty(I.prototype, 'consumer', {
    get: function() {
      return this.consumer_lkq38d$_0;
    }
  });
  I.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'I',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_1($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_1($receiver_17) {
    return $receiver_17;
  }

  function IFRAME(initialAttributes, consumer) {
    HTMLTag.call(this, 'iframe', consumer, initialAttributes, null, true, false);
    this.consumer_ofcz4a$_0 = consumer;
  }

  Object.defineProperty(IFRAME.prototype, 'consumer', {
    get: function() {
      return this.consumer_ofcz4a$_0;
    }
  });
  Object.defineProperty(IFRAME.prototype, 'name', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  Object.defineProperty(IFRAME.prototype, 'src', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'src');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'src', newValue);
    }
  });
  Object.defineProperty(IFRAME.prototype, 'height', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'height');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'height', newValue);
    }
  });
  Object.defineProperty(IFRAME.prototype, 'width', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'width');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'width', newValue);
    }
  });
  Object.defineProperty(IFRAME.prototype, 'sandbox', {
    get: function() {
      return attributeIframeSandboxEnumIframeSandboxValues.get_txhc1s$(this, 'sandbox');
    },
    set: function(newValue) {
      attributeIframeSandboxEnumIframeSandboxValues.set_fid0sb$(this, 'sandbox', newValue);
    }
  });
  Object.defineProperty(IFRAME.prototype, 'seamless', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'seamless');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'seamless', newValue);
    }
  });
  IFRAME.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'IFRAME',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };

  function get_asFlowContent_2($receiver_17) {
    return $receiver_17;
  }

  function get_asInteractiveContent_0($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_2($receiver_17) {
    return $receiver_17;
  }

  function IMG(initialAttributes, consumer) {
    HTMLTag.call(this, 'img', consumer, initialAttributes, null, true, true);
    this.consumer_6sfarh$_0 = consumer;
  }

  Object.defineProperty(IMG.prototype, 'consumer', {
    get: function() {
      return this.consumer_6sfarh$_0;
    }
  });
  Object.defineProperty(IMG.prototype, 'alt', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'alt');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'alt', newValue);
    }
  });
  Object.defineProperty(IMG.prototype, 'src', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'src');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'src', newValue);
    }
  });
  Object.defineProperty(IMG.prototype, 'height', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'height');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'height', newValue);
    }
  });
  Object.defineProperty(IMG.prototype, 'width', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'width');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'width', newValue);
    }
  });
  Object.defineProperty(IMG.prototype, 'usemap', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'usemap');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'usemap', newValue);
    }
  });
  Object.defineProperty(IMG.prototype, 'ismap', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'ismap');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'ismap', newValue);
    }
  });
  IMG.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'IMG',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };

  function get_asFlowContent_3($receiver_17) {
    return $receiver_17;
  }

  function get_asInteractiveContent_1($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_3($receiver_17) {
    return $receiver_17;
  }

  function INPUT(initialAttributes, consumer) {
    HTMLTag.call(this, 'input', consumer, initialAttributes, null, true, true);
    this.consumer_a2ovx8$_0 = consumer;
  }

  Object.defineProperty(INPUT.prototype, 'consumer', {
    get: function() {
      return this.consumer_a2ovx8$_0;
    }
  });
  Object.defineProperty(INPUT.prototype, 'type', {
    get: function() {
      return attributeInputTypeEnumInputTypeValues.get_txhc1s$(this, 'type');
    },
    set: function(newValue) {
      attributeInputTypeEnumInputTypeValues.set_fid0sb$(this, 'type', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'accept', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'accept');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'accept', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'alt', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'alt');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'alt', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'autoFocus', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'autofocus');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autofocus', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'autoComplete', {
    get: function() {
      return attributeBooleanBooleanOnOff.get_txhc1s$(this, 'autocomplete');
    },
    set: function(newValue) {
      attributeBooleanBooleanOnOff.set_fid0sb$(this, 'autocomplete', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'checked', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'checked');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'checked', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'disabled', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'form', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'formAction', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'formaction');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'formaction', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'formEncType', {
    get: function() {
      return attributeInputFormEncTypeEnumInputFormEncTypeValues.get_txhc1s$(this, 'formenctype');
    },
    set: function(newValue) {
      attributeInputFormEncTypeEnumInputFormEncTypeValues.set_fid0sb$(this, 'formenctype', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'formMethod', {
    get: function() {
      return attributeInputFormMethodEnumInputFormMethodValues.get_txhc1s$(this, 'formmethod');
    },
    set: function(newValue) {
      attributeInputFormMethodEnumInputFormMethodValues.set_fid0sb$(this, 'formmethod', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'formNovalidate', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'formnovalidate');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'formnovalidate', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'formTarget', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'formtarget');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'formtarget', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'height', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'height');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'height', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'list', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'list');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'list', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'max', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'max');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'max', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'maxLength', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'maxlength');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'maxlength', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'min', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'min');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'min', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'multiple', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'multiple');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'multiple', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'pattern', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'pattern');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'pattern', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'placeholder', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'placeholder');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'placeholder', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'readonly', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'readonly');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'readonly', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'required', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'required');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'required', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'size', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'size');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'size', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'src', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'src');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'src', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'step', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'step');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'step', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'width', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'width');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'width', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'files', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'files');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'files', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'value', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'value');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'value', newValue);
    }
  });
  Object.defineProperty(INPUT.prototype, 'name', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  INPUT.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'INPUT',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };

  function get_asFlowContent_4($receiver_17) {
    return $receiver_17;
  }

  function get_asInteractiveContent_2($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_4($receiver_17) {
    return $receiver_17;
  }

  function INS(initialAttributes, consumer) {
    HTMLTag.call(this, 'ins', consumer, initialAttributes, null, false, false);
    this.consumer_6sf9qg$_0 = consumer;
  }

  Object.defineProperty(INS.prototype, 'consumer', {
    get: function() {
      return this.consumer_6sf9qg$_0;
    }
  });
  Object.defineProperty(INS.prototype, 'cite', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'cite');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'cite', newValue);
    }
  });
  Object.defineProperty(INS.prototype, 'dateTime', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'datetime');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'datetime', newValue);
    }
  });
  INS.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'INS',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_5($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_5($receiver_17) {
    return $receiver_17;
  }

  function TABLE(initialAttributes, consumer) {
    HTMLTag.call(this, 'table', consumer, initialAttributes, null, false, false);
    this.consumer_f2s9p4$_0 = consumer;
  }

  Object.defineProperty(TABLE.prototype, 'consumer', {
    get: function() {
      return this.consumer_f2s9p4$_0;
    }
  });
  Object.defineProperty(TABLE.prototype, 'summary', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'summary');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'summary', newValue);
    }
  });
  TABLE.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TABLE',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function caption$lambda_0($receiver_17) {
  }

  function caption_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = caption$lambda_0;
    visit(new CAPTION(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function colGroup$lambda_0($receiver_17) {
  }

  function colGroup_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = colGroup$lambda_0;
    visit(new COLGROUP(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function thead$lambda_0($receiver_17) {
  }

  function thead_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = thead$lambda_0;
    visit(new THEAD(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function tfoot$lambda_0($receiver_17) {
  }

  function tfoot_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = tfoot$lambda_0;
    visit(new TFOOT(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function tbody$lambda_0($receiver_17) {
  }

  function tbody_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = tbody$lambda_0;
    visit(new TBODY(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function tr$lambda_0($receiver_17) {
  }

  function tr_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = tr$lambda_0;
    visit(new TR(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function TBODY(initialAttributes, consumer) {
    HTMLTag.call(this, 'tbody', consumer, initialAttributes, null, false, false);
    this.consumer_f3k7o0$_0 = consumer;
  }

  Object.defineProperty(TBODY.prototype, 'consumer', {
    get: function() {
      return this.consumer_f3k7o0$_0;
    }
  });
  TBODY.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TBODY',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };

  function tr$lambda_1($receiver_17) {
  }

  function tr_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = tr$lambda_1;
    visit(new TR(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function TD(initialAttributes, consumer) {
    HTMLTag.call(this, 'td', consumer, initialAttributes, null, false, false);
    this.consumer_tkgiv2$_0 = consumer;
  }

  Object.defineProperty(TD.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkgiv2$_0;
    }
  });
  Object.defineProperty(TD.prototype, 'headers', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'headers');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'headers', newValue);
    }
  });
  Object.defineProperty(TD.prototype, 'rowSpan', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'rowspan');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'rowspan', newValue);
    }
  });
  Object.defineProperty(TD.prototype, 'colSpan', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'colspan');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'colspan', newValue);
    }
  });
  TD.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TD',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function TEXTAREA(initialAttributes, consumer) {
    HTMLTag.call(this, 'textarea', consumer, initialAttributes, null, true, false);
    this.consumer_dtfm6k$_0 = consumer;
  }

  Object.defineProperty(TEXTAREA.prototype, 'consumer', {
    get: function() {
      return this.consumer_dtfm6k$_0;
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'autoFocus', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'autofocus');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autofocus', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'disabled', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'form', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'maxLength', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'maxlength');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'maxlength', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'name', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'placeholder', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'placeholder');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'placeholder', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'readonly', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'readonly');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'readonly', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'required', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'required');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'required', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'rows', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'rows');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'rows', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'cols', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'cols');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'cols', newValue);
    }
  });
  Object.defineProperty(TEXTAREA.prototype, 'wrap', {
    get: function() {
      return attributeTextAreaWrapEnumTextAreaWrapValues.get_txhc1s$(this, 'wrap');
    },
    set: function(newValue) {
      attributeTextAreaWrapEnumTextAreaWrapValues.set_fid0sb$(this, 'wrap', newValue);
    }
  });
  TEXTAREA.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TEXTAREA',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };

  function get_asFlowContent_6($receiver_17) {
    return $receiver_17;
  }

  function get_asInteractiveContent_3($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_6($receiver_17) {
    return $receiver_17;
  }

  function TFOOT(initialAttributes, consumer) {
    HTMLTag.call(this, 'tfoot', consumer, initialAttributes, null, false, false);
    this.consumer_f5rm2s$_0 = consumer;
  }

  Object.defineProperty(TFOOT.prototype, 'consumer', {
    get: function() {
      return this.consumer_f5rm2s$_0;
    }
  });
  TFOOT.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TFOOT',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };

  function tr$lambda_2($receiver_17) {
  }

  function tr_2($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = tr$lambda_2;
    visit(new TR(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function TH(initialAttributes, consumer) {
    HTMLTag.call(this, 'th', consumer, initialAttributes, null, false, false);
    this.consumer_tkgiyi$_0 = consumer;
  }

  Object.defineProperty(TH.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkgiyi$_0;
    }
  });
  Object.defineProperty(TH.prototype, 'headers', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'headers');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'headers', newValue);
    }
  });
  Object.defineProperty(TH.prototype, 'rowSpan', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'rowspan');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'rowspan', newValue);
    }
  });
  Object.defineProperty(TH.prototype, 'colSpan', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'colspan');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'colspan', newValue);
    }
  });
  Object.defineProperty(TH.prototype, 'scope', {
    get: function() {
      return attributeThScopeEnumThScopeValues.get_txhc1s$(this, 'scope');
    },
    set: function(newValue) {
      attributeThScopeEnumThScopeValues.set_fid0sb$(this, 'scope', newValue);
    }
  });
  TH.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TH',
    interfaces: [HtmlInlineTag, HTMLTag]
  };

  function THEAD(initialAttributes, consumer) {
    HTMLTag.call(this, 'thead', consumer, initialAttributes, null, false, false);
    this.consumer_f6oimq$_0 = consumer;
  }

  Object.defineProperty(THEAD.prototype, 'consumer', {
    get: function() {
      return this.consumer_f6oimq$_0;
    }
  });
  THEAD.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'THEAD',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };

  function tr$lambda_3($receiver_17) {
  }

  function tr_3($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = tr$lambda_3;
    visit(new TR(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function TIME(initialAttributes, consumer) {
    HTMLTag.call(this, 'time', consumer, initialAttributes, null, true, false);
    this.consumer_2s57lt$_0 = consumer;
  }

  Object.defineProperty(TIME.prototype, 'consumer', {
    get: function() {
      return this.consumer_2s57lt$_0;
    }
  });
  Object.defineProperty(TIME.prototype, 'dateTime', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'datetime');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'datetime', newValue);
    }
  });
  TIME.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TIME',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_7($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_7($receiver_17) {
    return $receiver_17;
  }

  function TITLE(initialAttributes, consumer) {
    HTMLTag.call(this, 'title', consumer, initialAttributes, null, false, false);
    this.consumer_f7i47i$_0 = consumer;
  }

  Object.defineProperty(TITLE.prototype, 'consumer', {
    get: function() {
      return this.consumer_f7i47i$_0;
    }
  });
  TITLE.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TITLE',
    interfaces: [HtmlHeadTag, HTMLTag]
  };

  function TR(initialAttributes, consumer) {
    HTMLTag.call(this, 'tr', consumer, initialAttributes, null, false, false);
    this.consumer_tkgj74$_0 = consumer;
  }

  Object.defineProperty(TR.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkgj74$_0;
    }
  });
  TR.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TR',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };

  function th$lambda_0($receiver_17) {
  }

  function th_0($receiver_17, scope, classes, block) {
    if (scope === void 0)
      scope = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = th$lambda_0;
    visit(new TH(attributesMapOf(['scope', scope != null ? enumEncode(scope) : null, 'class', classes]), $receiver_17.consumer), block);
  }

  function colTh$lambda($receiver_17) {
  }

  function colTh($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = colTh$lambda;
    visit(new TH(attributesMapOf(['scope', ThScope$col_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function colGroupTh$lambda($receiver_17) {
  }

  function colGroupTh($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = colGroupTh$lambda;
    visit(new TH(attributesMapOf(['scope', ThScope$colGroup_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function rowTh$lambda($receiver_17) {
  }

  function rowTh($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = rowTh$lambda;
    visit(new TH(attributesMapOf(['scope', ThScope$row_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function rowGroupTh$lambda($receiver_17) {
  }

  function rowGroupTh($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = rowGroupTh$lambda;
    visit(new TH(attributesMapOf(['scope', ThScope$rowGroup_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function td$lambda_0($receiver_17) {
  }

  function td_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = td$lambda_0;
    visit(new TD(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function Dir(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_6shvwn$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function Dir_initFields() {
    Dir_initFields = function() {
    };
    Dir$ltr_instance = new Dir('ltr', 0, 'ltr');
    Dir$rtl_instance = new Dir('rtl', 1, 'rtl');
  }

  Object.defineProperty(Dir.prototype, 'realValue', {
    get: function() {
      return this.realValue_6shvwn$_0;
    }
  });
  var Dir$ltr_instance;

  function Dir$ltr_getInstance() {
    Dir_initFields();
    return Dir$ltr_instance;
  }

  var Dir$rtl_instance;

  function Dir$rtl_getInstance() {
    Dir_initFields();
    return Dir$rtl_instance;
  }

  Dir.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Dir',
    interfaces: [AttributeEnum, Enum]
  };

  function Dir$values() {
    return [Dir$ltr_getInstance(), Dir$rtl_getInstance()];
  }

  Dir.values = Dir$values;

  function Dir$valueOf(name) {
    switch (name) {
      case 'ltr':
        return Dir$ltr_getInstance();
      case 'rtl':
        return Dir$rtl_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.Dir.' + name);
    }
  }

  Dir.valueOf_61zpoe$ = Dir$valueOf;
  var dirValues;

  function Draggable(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_sh13nr$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function Draggable_initFields() {
    Draggable_initFields = function() {
    };
    Draggable$true__instance = new Draggable('true_', 0, 'true');
    Draggable$false__instance = new Draggable('false_', 1, 'false');
    Draggable$auto_instance = new Draggable('auto', 2, 'auto');
  }

  Object.defineProperty(Draggable.prototype, 'realValue', {
    get: function() {
      return this.realValue_sh13nr$_0;
    }
  });
  var Draggable$true__instance;

  function Draggable$true__getInstance() {
    Draggable_initFields();
    return Draggable$true__instance;
  }

  var Draggable$false__instance;

  function Draggable$false__getInstance() {
    Draggable_initFields();
    return Draggable$false__instance;
  }

  var Draggable$auto_instance;

  function Draggable$auto_getInstance() {
    Draggable_initFields();
    return Draggable$auto_instance;
  }

  Draggable.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Draggable',
    interfaces: [AttributeEnum, Enum]
  };

  function Draggable$values() {
    return [Draggable$true__getInstance(), Draggable$false__getInstance(), Draggable$auto_getInstance()];
  }

  Draggable.values = Draggable$values;

  function Draggable$valueOf(name) {
    switch (name) {
      case 'true_':
        return Draggable$true__getInstance();
      case 'false_':
        return Draggable$false__getInstance();
      case 'auto':
        return Draggable$auto_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.Draggable.' + name);
    }
  }

  Draggable.valueOf_61zpoe$ = Draggable$valueOf;
  var draggableValues;

  function RunAt(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_ey285k$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function RunAt_initFields() {
    RunAt_initFields = function() {
    };
    RunAt$server_instance = new RunAt('server', 0, 'server');
  }

  Object.defineProperty(RunAt.prototype, 'realValue', {
    get: function() {
      return this.realValue_ey285k$_0;
    }
  });
  var RunAt$server_instance;

  function RunAt$server_getInstance() {
    RunAt_initFields();
    return RunAt$server_instance;
  }

  RunAt.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RunAt',
    interfaces: [AttributeEnum, Enum]
  };

  function RunAt$values() {
    return [RunAt$server_getInstance()];
  }

  RunAt.values = RunAt$values;

  function RunAt$valueOf(name) {
    switch (name) {
      case 'server':
        return RunAt$server_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.RunAt.' + name);
    }
  }

  RunAt.valueOf_61zpoe$ = RunAt$valueOf;
  var runAtValues;

  function ATarget() {
    ATarget_instance = this;
    this.blank = '_blank';
    this.parent = '_parent';
    this.self = '_self';
    this.top = '_top';
    this.values = listOf(['blank', 'parent', 'self', 'top']);
  }

  ATarget.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'ATarget',
    interfaces: []
  };
  var ATarget_instance = null;

  function ATarget_getInstance() {
    if (ATarget_instance === null) {
      new ATarget();
    }
    return ATarget_instance;
  }

  function ARel() {
    ARel_instance = this;
    this.alternate = 'Alternate';
    this.appEndIx = 'Appendix';
    this.bookmark = 'Bookmark';
    this.chapter = 'Chapter';
    this.contentS = 'Contents';
    this.copyright = 'Copyright';
    this.glossary = 'Glossary';
    this.help = 'Help';
    this.index = 'Index';
    this.next = 'Next';
    this.prev = 'Prev';
    this.section = 'Section';
    this.start = 'Start';
    this.stylesheet = 'Stylesheet';
    this.subsection = 'Subsection';
    this.values = listOf(['alternate', 'appEndIx', 'bookmark', 'chapter', 'contentS', 'copyright', 'glossary', 'help', 'index', 'next', 'prev', 'section', 'start', 'stylesheet', 'subsection']);
  }

  ARel.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'ARel',
    interfaces: []
  };
  var ARel_instance = null;

  function ARel_getInstance() {
    if (ARel_instance === null) {
      new ARel();
    }
    return ARel_instance;
  }

  function AType() {
    AType_instance = this;
    this.textAsp = 'text/asp';
    this.textAsa = 'text/asa';
    this.textCss = 'text/css';
    this.textHtml = 'text/html';
    this.textJavaScript = 'text/javascript';
    this.textPlain = 'text/plain';
    this.textScriptLet = 'text/scriptlet';
    this.textXComponent = 'text/x-component';
    this.textXHtmlInsertion = 'text/x-html-insertion';
    this.textXml = 'text/xml';
    this.values = listOf(['textAsp', 'textAsa', 'textCss', 'textHtml', 'textJavaScript', 'textPlain', 'textScriptLet', 'textXComponent', 'textXHtmlInsertion', 'textXml']);
  }

  AType.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'AType',
    interfaces: []
  };
  var AType_instance = null;

  function AType_getInstance() {
    if (AType_instance === null) {
      new AType();
    }
    return AType_instance;
  }

  function AreaShape(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_uzg4u$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function AreaShape_initFields() {
    AreaShape_initFields = function() {
    };
    AreaShape$rect_instance = new AreaShape('rect', 0, 'rect');
    AreaShape$circle_instance = new AreaShape('circle', 1, 'circle');
    AreaShape$poly_instance = new AreaShape('poly', 2, 'poly');
    AreaShape$default_instance = new AreaShape('default', 3, 'default');
  }

  Object.defineProperty(AreaShape.prototype, 'realValue', {
    get: function() {
      return this.realValue_uzg4u$_0;
    }
  });
  var AreaShape$rect_instance;

  function AreaShape$rect_getInstance() {
    AreaShape_initFields();
    return AreaShape$rect_instance;
  }

  var AreaShape$circle_instance;

  function AreaShape$circle_getInstance() {
    AreaShape_initFields();
    return AreaShape$circle_instance;
  }

  var AreaShape$poly_instance;

  function AreaShape$poly_getInstance() {
    AreaShape_initFields();
    return AreaShape$poly_instance;
  }

  var AreaShape$default_instance;

  function AreaShape$default_getInstance() {
    AreaShape_initFields();
    return AreaShape$default_instance;
  }

  AreaShape.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AreaShape',
    interfaces: [AttributeEnum, Enum]
  };

  function AreaShape$values() {
    return [AreaShape$rect_getInstance(), AreaShape$circle_getInstance(), AreaShape$poly_getInstance(), AreaShape$default_getInstance()];
  }

  AreaShape.values = AreaShape$values;

  function AreaShape$valueOf(name) {
    switch (name) {
      case 'rect':
        return AreaShape$rect_getInstance();
      case 'circle':
        return AreaShape$circle_getInstance();
      case 'poly':
        return AreaShape$poly_getInstance();
      case 'default':
        return AreaShape$default_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.AreaShape.' + name);
    }
  }

  AreaShape.valueOf_61zpoe$ = AreaShape$valueOf;
  var areaShapeValues;

  function AreaTarget() {
    AreaTarget_instance = this;
    this.blank = '_blank';
    this.parent = '_parent';
    this.self = '_self';
    this.top = '_top';
    this.values = listOf(['blank', 'parent', 'self', 'top']);
  }

  AreaTarget.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'AreaTarget',
    interfaces: []
  };
  var AreaTarget_instance = null;

  function AreaTarget_getInstance() {
    if (AreaTarget_instance === null) {
      new AreaTarget();
    }
    return AreaTarget_instance;
  }

  function AreaRel() {
    AreaRel_instance = this;
    this.alternate = 'Alternate';
    this.appEndIx = 'Appendix';
    this.bookmark = 'Bookmark';
    this.chapter = 'Chapter';
    this.contentS = 'Contents';
    this.copyright = 'Copyright';
    this.glossary = 'Glossary';
    this.help = 'Help';
    this.index = 'Index';
    this.next = 'Next';
    this.prev = 'Prev';
    this.section = 'Section';
    this.start = 'Start';
    this.stylesheet = 'Stylesheet';
    this.subsection = 'Subsection';
    this.values = listOf(['alternate', 'appEndIx', 'bookmark', 'chapter', 'contentS', 'copyright', 'glossary', 'help', 'index', 'next', 'prev', 'section', 'start', 'stylesheet', 'subsection']);
  }

  AreaRel.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'AreaRel',
    interfaces: []
  };
  var AreaRel_instance = null;

  function AreaRel_getInstance() {
    if (AreaRel_instance === null) {
      new AreaRel();
    }
    return AreaRel_instance;
  }

  function BaseTarget() {
    BaseTarget_instance = this;
    this.blank = '_blank';
    this.parent = '_parent';
    this.self = '_self';
    this.top = '_top';
    this.values = listOf(['blank', 'parent', 'self', 'top']);
  }

  BaseTarget.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'BaseTarget',
    interfaces: []
  };
  var BaseTarget_instance = null;

  function BaseTarget_getInstance() {
    if (BaseTarget_instance === null) {
      new BaseTarget();
    }
    return BaseTarget_instance;
  }

  function ButtonFormEncType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_6mz8t4$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function ButtonFormEncType_initFields() {
    ButtonFormEncType_initFields = function() {
    };
    ButtonFormEncType$multipartFormData_instance = new ButtonFormEncType('multipartFormData', 0, 'multipart/form-data');
    ButtonFormEncType$applicationXWwwFormUrlEncoded_instance = new ButtonFormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    ButtonFormEncType$textPlain_instance = new ButtonFormEncType('textPlain', 2, 'text/plain');
  }

  Object.defineProperty(ButtonFormEncType.prototype, 'realValue', {
    get: function() {
      return this.realValue_6mz8t4$_0;
    }
  });
  var ButtonFormEncType$multipartFormData_instance;

  function ButtonFormEncType$multipartFormData_getInstance() {
    ButtonFormEncType_initFields();
    return ButtonFormEncType$multipartFormData_instance;
  }

  var ButtonFormEncType$applicationXWwwFormUrlEncoded_instance;

  function ButtonFormEncType$applicationXWwwFormUrlEncoded_getInstance() {
    ButtonFormEncType_initFields();
    return ButtonFormEncType$applicationXWwwFormUrlEncoded_instance;
  }

  var ButtonFormEncType$textPlain_instance;

  function ButtonFormEncType$textPlain_getInstance() {
    ButtonFormEncType_initFields();
    return ButtonFormEncType$textPlain_instance;
  }

  ButtonFormEncType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ButtonFormEncType',
    interfaces: [AttributeEnum, Enum]
  };

  function ButtonFormEncType$values() {
    return [ButtonFormEncType$multipartFormData_getInstance(), ButtonFormEncType$applicationXWwwFormUrlEncoded_getInstance(), ButtonFormEncType$textPlain_getInstance()];
  }

  ButtonFormEncType.values = ButtonFormEncType$values;

  function ButtonFormEncType$valueOf(name) {
    switch (name) {
      case 'multipartFormData':
        return ButtonFormEncType$multipartFormData_getInstance();
      case 'applicationXWwwFormUrlEncoded':
        return ButtonFormEncType$applicationXWwwFormUrlEncoded_getInstance();
      case 'textPlain':
        return ButtonFormEncType$textPlain_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.ButtonFormEncType.' + name);
    }
  }

  ButtonFormEncType.valueOf_61zpoe$ = ButtonFormEncType$valueOf;
  var buttonFormEncTypeValues;

  function ButtonFormMethod(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_he15gp$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function ButtonFormMethod_initFields() {
    ButtonFormMethod_initFields = function() {
    };
    ButtonFormMethod$get_instance = new ButtonFormMethod('get', 0, 'get');
    ButtonFormMethod$post_instance = new ButtonFormMethod('post', 1, 'post');
    ButtonFormMethod$put_instance = new ButtonFormMethod('put', 2, 'put');
    ButtonFormMethod$delete_instance = new ButtonFormMethod('delete', 3, 'delete');
  }

  Object.defineProperty(ButtonFormMethod.prototype, 'realValue', {
    get: function() {
      return this.realValue_he15gp$_0;
    }
  });
  var ButtonFormMethod$get_instance;

  function ButtonFormMethod$get_getInstance() {
    ButtonFormMethod_initFields();
    return ButtonFormMethod$get_instance;
  }

  var ButtonFormMethod$post_instance;

  function ButtonFormMethod$post_getInstance() {
    ButtonFormMethod_initFields();
    return ButtonFormMethod$post_instance;
  }

  var ButtonFormMethod$put_instance;

  function ButtonFormMethod$put_getInstance() {
    ButtonFormMethod_initFields();
    return ButtonFormMethod$put_instance;
  }

  var ButtonFormMethod$delete_instance;

  function ButtonFormMethod$delete_getInstance() {
    ButtonFormMethod_initFields();
    return ButtonFormMethod$delete_instance;
  }

  ButtonFormMethod.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ButtonFormMethod',
    interfaces: [AttributeEnum, Enum]
  };

  function ButtonFormMethod$values() {
    return [ButtonFormMethod$get_getInstance(), ButtonFormMethod$post_getInstance(), ButtonFormMethod$put_getInstance(), ButtonFormMethod$delete_getInstance()];
  }

  ButtonFormMethod.values = ButtonFormMethod$values;

  function ButtonFormMethod$valueOf(name) {
    switch (name) {
      case 'get':
        return ButtonFormMethod$get_getInstance();
      case 'post':
        return ButtonFormMethod$post_getInstance();
      case 'put':
        return ButtonFormMethod$put_getInstance();
      case 'delete':
        return ButtonFormMethod$delete_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.ButtonFormMethod.' + name);
    }
  }

  ButtonFormMethod.valueOf_61zpoe$ = ButtonFormMethod$valueOf;
  var buttonFormMethodValues;

  function ButtonFormTarget() {
    ButtonFormTarget_instance = this;
    this.blank = '_blank';
    this.parent = '_parent';
    this.self = '_self';
    this.top = '_top';
    this.values = listOf(['blank', 'parent', 'self', 'top']);
  }

  ButtonFormTarget.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'ButtonFormTarget',
    interfaces: []
  };
  var ButtonFormTarget_instance = null;

  function ButtonFormTarget_getInstance() {
    if (ButtonFormTarget_instance === null) {
      new ButtonFormTarget();
    }
    return ButtonFormTarget_instance;
  }

  function ButtonType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_kjj0ea$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function ButtonType_initFields() {
    ButtonType_initFields = function() {
    };
    ButtonType$button_instance = new ButtonType('button', 0, 'button');
    ButtonType$reset_instance = new ButtonType('reset', 1, 'reset');
    ButtonType$submit_instance = new ButtonType('submit', 2, 'submit');
  }

  Object.defineProperty(ButtonType.prototype, 'realValue', {
    get: function() {
      return this.realValue_kjj0ea$_0;
    }
  });
  var ButtonType$button_instance;

  function ButtonType$button_getInstance() {
    ButtonType_initFields();
    return ButtonType$button_instance;
  }

  var ButtonType$reset_instance;

  function ButtonType$reset_getInstance() {
    ButtonType_initFields();
    return ButtonType$reset_instance;
  }

  var ButtonType$submit_instance;

  function ButtonType$submit_getInstance() {
    ButtonType_initFields();
    return ButtonType$submit_instance;
  }

  ButtonType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ButtonType',
    interfaces: [AttributeEnum, Enum]
  };

  function ButtonType$values() {
    return [ButtonType$button_getInstance(), ButtonType$reset_getInstance(), ButtonType$submit_getInstance()];
  }

  ButtonType.values = ButtonType$values;

  function ButtonType$valueOf(name) {
    switch (name) {
      case 'button':
        return ButtonType$button_getInstance();
      case 'reset':
        return ButtonType$reset_getInstance();
      case 'submit':
        return ButtonType$submit_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.ButtonType.' + name);
    }
  }

  ButtonType.valueOf_61zpoe$ = ButtonType$valueOf;
  var buttonTypeValues;

  function CommandType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_dgxtb5$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function CommandType_initFields() {
    CommandType_initFields = function() {
    };
    CommandType$command_instance = new CommandType('command', 0, 'command');
    CommandType$checkBox_instance = new CommandType('checkBox', 1, 'checkbox');
    CommandType$radio_instance = new CommandType('radio', 2, 'radio');
  }

  Object.defineProperty(CommandType.prototype, 'realValue', {
    get: function() {
      return this.realValue_dgxtb5$_0;
    }
  });
  var CommandType$command_instance;

  function CommandType$command_getInstance() {
    CommandType_initFields();
    return CommandType$command_instance;
  }

  var CommandType$checkBox_instance;

  function CommandType$checkBox_getInstance() {
    CommandType_initFields();
    return CommandType$checkBox_instance;
  }

  var CommandType$radio_instance;

  function CommandType$radio_getInstance() {
    CommandType_initFields();
    return CommandType$radio_instance;
  }

  CommandType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CommandType',
    interfaces: [AttributeEnum, Enum]
  };

  function CommandType$values() {
    return [CommandType$command_getInstance(), CommandType$checkBox_getInstance(), CommandType$radio_getInstance()];
  }

  CommandType.values = CommandType$values;

  function CommandType$valueOf(name) {
    switch (name) {
      case 'command':
        return CommandType$command_getInstance();
      case 'checkBox':
        return CommandType$checkBox_getInstance();
      case 'radio':
        return CommandType$radio_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.CommandType.' + name);
    }
  }

  CommandType.valueOf_61zpoe$ = CommandType$valueOf;
  var commandTypeValues;

  function FormEncType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_mjs8fe$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function FormEncType_initFields() {
    FormEncType_initFields = function() {
    };
    FormEncType$multipartFormData_instance = new FormEncType('multipartFormData', 0, 'multipart/form-data');
    FormEncType$applicationXWwwFormUrlEncoded_instance = new FormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    FormEncType$textPlain_instance = new FormEncType('textPlain', 2, 'text/plain');
  }

  Object.defineProperty(FormEncType.prototype, 'realValue', {
    get: function() {
      return this.realValue_mjs8fe$_0;
    }
  });
  var FormEncType$multipartFormData_instance;

  function FormEncType$multipartFormData_getInstance() {
    FormEncType_initFields();
    return FormEncType$multipartFormData_instance;
  }

  var FormEncType$applicationXWwwFormUrlEncoded_instance;

  function FormEncType$applicationXWwwFormUrlEncoded_getInstance() {
    FormEncType_initFields();
    return FormEncType$applicationXWwwFormUrlEncoded_instance;
  }

  var FormEncType$textPlain_instance;

  function FormEncType$textPlain_getInstance() {
    FormEncType_initFields();
    return FormEncType$textPlain_instance;
  }

  FormEncType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FormEncType',
    interfaces: [AttributeEnum, Enum]
  };

  function FormEncType$values() {
    return [FormEncType$multipartFormData_getInstance(), FormEncType$applicationXWwwFormUrlEncoded_getInstance(), FormEncType$textPlain_getInstance()];
  }

  FormEncType.values = FormEncType$values;

  function FormEncType$valueOf(name) {
    switch (name) {
      case 'multipartFormData':
        return FormEncType$multipartFormData_getInstance();
      case 'applicationXWwwFormUrlEncoded':
        return FormEncType$applicationXWwwFormUrlEncoded_getInstance();
      case 'textPlain':
        return FormEncType$textPlain_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.FormEncType.' + name);
    }
  }

  FormEncType.valueOf_61zpoe$ = FormEncType$valueOf;
  var formEncTypeValues;

  function FormMethod(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_dbj8t3$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function FormMethod_initFields() {
    FormMethod_initFields = function() {
    };
    FormMethod$get_instance = new FormMethod('get', 0, 'get');
    FormMethod$post_instance = new FormMethod('post', 1, 'post');
    FormMethod$put_instance = new FormMethod('put', 2, 'put');
    FormMethod$delete_instance = new FormMethod('delete', 3, 'delete');
  }

  Object.defineProperty(FormMethod.prototype, 'realValue', {
    get: function() {
      return this.realValue_dbj8t3$_0;
    }
  });
  var FormMethod$get_instance;

  function FormMethod$get_getInstance() {
    FormMethod_initFields();
    return FormMethod$get_instance;
  }

  var FormMethod$post_instance;

  function FormMethod$post_getInstance() {
    FormMethod_initFields();
    return FormMethod$post_instance;
  }

  var FormMethod$put_instance;

  function FormMethod$put_getInstance() {
    FormMethod_initFields();
    return FormMethod$put_instance;
  }

  var FormMethod$delete_instance;

  function FormMethod$delete_getInstance() {
    FormMethod_initFields();
    return FormMethod$delete_instance;
  }

  FormMethod.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FormMethod',
    interfaces: [AttributeEnum, Enum]
  };

  function FormMethod$values() {
    return [FormMethod$get_getInstance(), FormMethod$post_getInstance(), FormMethod$put_getInstance(), FormMethod$delete_getInstance()];
  }

  FormMethod.values = FormMethod$values;

  function FormMethod$valueOf(name) {
    switch (name) {
      case 'get':
        return FormMethod$get_getInstance();
      case 'post':
        return FormMethod$post_getInstance();
      case 'put':
        return FormMethod$put_getInstance();
      case 'delete':
        return FormMethod$delete_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.FormMethod.' + name);
    }
  }

  FormMethod.valueOf_61zpoe$ = FormMethod$valueOf;
  var formMethodValues;

  function FormTarget() {
    FormTarget_instance = this;
    this.blank = '_blank';
    this.parent = '_parent';
    this.self = '_self';
    this.top = '_top';
    this.values = listOf(['blank', 'parent', 'self', 'top']);
  }

  FormTarget.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'FormTarget',
    interfaces: []
  };
  var FormTarget_instance = null;

  function FormTarget_getInstance() {
    if (FormTarget_instance === null) {
      new FormTarget();
    }
    return FormTarget_instance;
  }

  function IframeName() {
    IframeName_instance = this;
    this.blank = '_blank';
    this.parent = '_parent';
    this.self = '_self';
    this.top = '_top';
    this.values = listOf(['blank', 'parent', 'self', 'top']);
  }

  IframeName.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'IframeName',
    interfaces: []
  };
  var IframeName_instance = null;

  function IframeName_getInstance() {
    if (IframeName_instance === null) {
      new IframeName();
    }
    return IframeName_instance;
  }

  function IframeSandbox(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_jow5qb$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function IframeSandbox_initFields() {
    IframeSandbox_initFields = function() {
    };
    IframeSandbox$allowSameOrigin_instance = new IframeSandbox('allowSameOrigin', 0, 'allow-same-origin');
    IframeSandbox$allowFormS_instance = new IframeSandbox('allowFormS', 1, 'allow-forms');
    IframeSandbox$allowScripts_instance = new IframeSandbox('allowScripts', 2, 'allow-scripts');
  }

  Object.defineProperty(IframeSandbox.prototype, 'realValue', {
    get: function() {
      return this.realValue_jow5qb$_0;
    }
  });
  var IframeSandbox$allowSameOrigin_instance;

  function IframeSandbox$allowSameOrigin_getInstance() {
    IframeSandbox_initFields();
    return IframeSandbox$allowSameOrigin_instance;
  }

  var IframeSandbox$allowFormS_instance;

  function IframeSandbox$allowFormS_getInstance() {
    IframeSandbox_initFields();
    return IframeSandbox$allowFormS_instance;
  }

  var IframeSandbox$allowScripts_instance;

  function IframeSandbox$allowScripts_getInstance() {
    IframeSandbox_initFields();
    return IframeSandbox$allowScripts_instance;
  }

  IframeSandbox.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'IframeSandbox',
    interfaces: [AttributeEnum, Enum]
  };

  function IframeSandbox$values() {
    return [IframeSandbox$allowSameOrigin_getInstance(), IframeSandbox$allowFormS_getInstance(), IframeSandbox$allowScripts_getInstance()];
  }

  IframeSandbox.values = IframeSandbox$values;

  function IframeSandbox$valueOf(name) {
    switch (name) {
      case 'allowSameOrigin':
        return IframeSandbox$allowSameOrigin_getInstance();
      case 'allowFormS':
        return IframeSandbox$allowFormS_getInstance();
      case 'allowScripts':
        return IframeSandbox$allowScripts_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.IframeSandbox.' + name);
    }
  }

  IframeSandbox.valueOf_61zpoe$ = IframeSandbox$valueOf;
  var iframeSandboxValues;

  function InputType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_8c27wi$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function InputType_initFields() {
    InputType_initFields = function() {
    };
    InputType$button_instance = new InputType('button', 0, 'button');
    InputType$checkBox_instance = new InputType('checkBox', 1, 'checkbox');
    InputType$color_instance = new InputType('color', 2, 'color');
    InputType$date_instance = new InputType('date', 3, 'date');
    InputType$dateTime_instance = new InputType('dateTime', 4, 'datetime');
    InputType$dateTimeLocal_instance = new InputType('dateTimeLocal', 5, 'datetime-local');
    InputType$email_instance = new InputType('email', 6, 'email');
    InputType$file_instance = new InputType('file', 7, 'file');
    InputType$hidden_instance = new InputType('hidden', 8, 'hidden');
    InputType$image_instance = new InputType('image', 9, 'image');
    InputType$month_instance = new InputType('month', 10, 'month');
    InputType$number_instance = new InputType('number', 11, 'number');
    InputType$password_instance = new InputType('password', 12, 'password');
    InputType$radio_instance = new InputType('radio', 13, 'radio');
    InputType$range_instance = new InputType('range', 14, 'range');
    InputType$reset_instance = new InputType('reset', 15, 'reset');
    InputType$search_instance = new InputType('search', 16, 'search');
    InputType$submit_instance = new InputType('submit', 17, 'submit');
    InputType$text_instance = new InputType('text', 18, 'text');
    InputType$tel_instance = new InputType('tel', 19, 'tel');
    InputType$time_instance = new InputType('time', 20, 'time');
    InputType$url_instance = new InputType('url', 21, 'url');
    InputType$week_instance = new InputType('week', 22, 'week');
  }

  Object.defineProperty(InputType.prototype, 'realValue', {
    get: function() {
      return this.realValue_8c27wi$_0;
    }
  });
  var InputType$button_instance;

  function InputType$button_getInstance() {
    InputType_initFields();
    return InputType$button_instance;
  }

  var InputType$checkBox_instance;

  function InputType$checkBox_getInstance() {
    InputType_initFields();
    return InputType$checkBox_instance;
  }

  var InputType$color_instance;

  function InputType$color_getInstance() {
    InputType_initFields();
    return InputType$color_instance;
  }

  var InputType$date_instance;

  function InputType$date_getInstance() {
    InputType_initFields();
    return InputType$date_instance;
  }

  var InputType$dateTime_instance;

  function InputType$dateTime_getInstance() {
    InputType_initFields();
    return InputType$dateTime_instance;
  }

  var InputType$dateTimeLocal_instance;

  function InputType$dateTimeLocal_getInstance() {
    InputType_initFields();
    return InputType$dateTimeLocal_instance;
  }

  var InputType$email_instance;

  function InputType$email_getInstance() {
    InputType_initFields();
    return InputType$email_instance;
  }

  var InputType$file_instance;

  function InputType$file_getInstance() {
    InputType_initFields();
    return InputType$file_instance;
  }

  var InputType$hidden_instance;

  function InputType$hidden_getInstance() {
    InputType_initFields();
    return InputType$hidden_instance;
  }

  var InputType$image_instance;

  function InputType$image_getInstance() {
    InputType_initFields();
    return InputType$image_instance;
  }

  var InputType$month_instance;

  function InputType$month_getInstance() {
    InputType_initFields();
    return InputType$month_instance;
  }

  var InputType$number_instance;

  function InputType$number_getInstance() {
    InputType_initFields();
    return InputType$number_instance;
  }

  var InputType$password_instance;

  function InputType$password_getInstance() {
    InputType_initFields();
    return InputType$password_instance;
  }

  var InputType$radio_instance;

  function InputType$radio_getInstance() {
    InputType_initFields();
    return InputType$radio_instance;
  }

  var InputType$range_instance;

  function InputType$range_getInstance() {
    InputType_initFields();
    return InputType$range_instance;
  }

  var InputType$reset_instance;

  function InputType$reset_getInstance() {
    InputType_initFields();
    return InputType$reset_instance;
  }

  var InputType$search_instance;

  function InputType$search_getInstance() {
    InputType_initFields();
    return InputType$search_instance;
  }

  var InputType$submit_instance;

  function InputType$submit_getInstance() {
    InputType_initFields();
    return InputType$submit_instance;
  }

  var InputType$text_instance;

  function InputType$text_getInstance() {
    InputType_initFields();
    return InputType$text_instance;
  }

  var InputType$tel_instance;

  function InputType$tel_getInstance() {
    InputType_initFields();
    return InputType$tel_instance;
  }

  var InputType$time_instance;

  function InputType$time_getInstance() {
    InputType_initFields();
    return InputType$time_instance;
  }

  var InputType$url_instance;

  function InputType$url_getInstance() {
    InputType_initFields();
    return InputType$url_instance;
  }

  var InputType$week_instance;

  function InputType$week_getInstance() {
    InputType_initFields();
    return InputType$week_instance;
  }

  InputType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InputType',
    interfaces: [AttributeEnum, Enum]
  };

  function InputType$values() {
    return [InputType$button_getInstance(), InputType$checkBox_getInstance(), InputType$color_getInstance(), InputType$date_getInstance(), InputType$dateTime_getInstance(), InputType$dateTimeLocal_getInstance(), InputType$email_getInstance(), InputType$file_getInstance(), InputType$hidden_getInstance(), InputType$image_getInstance(), InputType$month_getInstance(), InputType$number_getInstance(), InputType$password_getInstance(), InputType$radio_getInstance(), InputType$range_getInstance(), InputType$reset_getInstance(), InputType$search_getInstance(), InputType$submit_getInstance(), InputType$text_getInstance(), InputType$tel_getInstance(), InputType$time_getInstance(), InputType$url_getInstance(), InputType$week_getInstance()];
  }

  InputType.values = InputType$values;

  function InputType$valueOf(name) {
    switch (name) {
      case 'button':
        return InputType$button_getInstance();
      case 'checkBox':
        return InputType$checkBox_getInstance();
      case 'color':
        return InputType$color_getInstance();
      case 'date':
        return InputType$date_getInstance();
      case 'dateTime':
        return InputType$dateTime_getInstance();
      case 'dateTimeLocal':
        return InputType$dateTimeLocal_getInstance();
      case 'email':
        return InputType$email_getInstance();
      case 'file':
        return InputType$file_getInstance();
      case 'hidden':
        return InputType$hidden_getInstance();
      case 'image':
        return InputType$image_getInstance();
      case 'month':
        return InputType$month_getInstance();
      case 'number':
        return InputType$number_getInstance();
      case 'password':
        return InputType$password_getInstance();
      case 'radio':
        return InputType$radio_getInstance();
      case 'range':
        return InputType$range_getInstance();
      case 'reset':
        return InputType$reset_getInstance();
      case 'search':
        return InputType$search_getInstance();
      case 'submit':
        return InputType$submit_getInstance();
      case 'text':
        return InputType$text_getInstance();
      case 'tel':
        return InputType$tel_getInstance();
      case 'time':
        return InputType$time_getInstance();
      case 'url':
        return InputType$url_getInstance();
      case 'week':
        return InputType$week_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.InputType.' + name);
    }
  }

  InputType.valueOf_61zpoe$ = InputType$valueOf;
  var inputTypeValues;

  function InputFormEncType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_7oxi3s$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function InputFormEncType_initFields() {
    InputFormEncType_initFields = function() {
    };
    InputFormEncType$multipartFormData_instance = new InputFormEncType('multipartFormData', 0, 'multipart/form-data');
    InputFormEncType$applicationXWwwFormUrlEncoded_instance = new InputFormEncType('applicationXWwwFormUrlEncoded', 1, 'application/x-www-form-urlencoded');
    InputFormEncType$textPlain_instance = new InputFormEncType('textPlain', 2, 'text/plain');
  }

  Object.defineProperty(InputFormEncType.prototype, 'realValue', {
    get: function() {
      return this.realValue_7oxi3s$_0;
    }
  });
  var InputFormEncType$multipartFormData_instance;

  function InputFormEncType$multipartFormData_getInstance() {
    InputFormEncType_initFields();
    return InputFormEncType$multipartFormData_instance;
  }

  var InputFormEncType$applicationXWwwFormUrlEncoded_instance;

  function InputFormEncType$applicationXWwwFormUrlEncoded_getInstance() {
    InputFormEncType_initFields();
    return InputFormEncType$applicationXWwwFormUrlEncoded_instance;
  }

  var InputFormEncType$textPlain_instance;

  function InputFormEncType$textPlain_getInstance() {
    InputFormEncType_initFields();
    return InputFormEncType$textPlain_instance;
  }

  InputFormEncType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InputFormEncType',
    interfaces: [AttributeEnum, Enum]
  };

  function InputFormEncType$values() {
    return [InputFormEncType$multipartFormData_getInstance(), InputFormEncType$applicationXWwwFormUrlEncoded_getInstance(), InputFormEncType$textPlain_getInstance()];
  }

  InputFormEncType.values = InputFormEncType$values;

  function InputFormEncType$valueOf(name) {
    switch (name) {
      case 'multipartFormData':
        return InputFormEncType$multipartFormData_getInstance();
      case 'applicationXWwwFormUrlEncoded':
        return InputFormEncType$applicationXWwwFormUrlEncoded_getInstance();
      case 'textPlain':
        return InputFormEncType$textPlain_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.InputFormEncType.' + name);
    }
  }

  InputFormEncType.valueOf_61zpoe$ = InputFormEncType$valueOf;
  var inputFormEncTypeValues;

  function InputFormMethod(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_lid4q1$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function InputFormMethod_initFields() {
    InputFormMethod_initFields = function() {
    };
    InputFormMethod$get_instance = new InputFormMethod('get', 0, 'get');
    InputFormMethod$post_instance = new InputFormMethod('post', 1, 'post');
    InputFormMethod$put_instance = new InputFormMethod('put', 2, 'put');
    InputFormMethod$delete_instance = new InputFormMethod('delete', 3, 'delete');
  }

  Object.defineProperty(InputFormMethod.prototype, 'realValue', {
    get: function() {
      return this.realValue_lid4q1$_0;
    }
  });
  var InputFormMethod$get_instance;

  function InputFormMethod$get_getInstance() {
    InputFormMethod_initFields();
    return InputFormMethod$get_instance;
  }

  var InputFormMethod$post_instance;

  function InputFormMethod$post_getInstance() {
    InputFormMethod_initFields();
    return InputFormMethod$post_instance;
  }

  var InputFormMethod$put_instance;

  function InputFormMethod$put_getInstance() {
    InputFormMethod_initFields();
    return InputFormMethod$put_instance;
  }

  var InputFormMethod$delete_instance;

  function InputFormMethod$delete_getInstance() {
    InputFormMethod_initFields();
    return InputFormMethod$delete_instance;
  }

  InputFormMethod.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InputFormMethod',
    interfaces: [AttributeEnum, Enum]
  };

  function InputFormMethod$values() {
    return [InputFormMethod$get_getInstance(), InputFormMethod$post_getInstance(), InputFormMethod$put_getInstance(), InputFormMethod$delete_getInstance()];
  }

  InputFormMethod.values = InputFormMethod$values;

  function InputFormMethod$valueOf(name) {
    switch (name) {
      case 'get':
        return InputFormMethod$get_getInstance();
      case 'post':
        return InputFormMethod$post_getInstance();
      case 'put':
        return InputFormMethod$put_getInstance();
      case 'delete':
        return InputFormMethod$delete_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.InputFormMethod.' + name);
    }
  }

  InputFormMethod.valueOf_61zpoe$ = InputFormMethod$valueOf;
  var inputFormMethodValues;

  function InputFormTarget() {
    InputFormTarget_instance = this;
    this.blank = '_blank';
    this.parent = '_parent';
    this.self = '_self';
    this.top = '_top';
    this.values = listOf(['blank', 'parent', 'self', 'top']);
  }

  InputFormTarget.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'InputFormTarget',
    interfaces: []
  };
  var InputFormTarget_instance = null;

  function InputFormTarget_getInstance() {
    if (InputFormTarget_instance === null) {
      new InputFormTarget();
    }
    return InputFormTarget_instance;
  }

  function KeyGenKeyType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_ucztlq$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function KeyGenKeyType_initFields() {
    KeyGenKeyType_initFields = function() {
    };
    KeyGenKeyType$rsa_instance = new KeyGenKeyType('rsa', 0, 'rsa');
  }

  Object.defineProperty(KeyGenKeyType.prototype, 'realValue', {
    get: function() {
      return this.realValue_ucztlq$_0;
    }
  });
  var KeyGenKeyType$rsa_instance;

  function KeyGenKeyType$rsa_getInstance() {
    KeyGenKeyType_initFields();
    return KeyGenKeyType$rsa_instance;
  }

  KeyGenKeyType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'KeyGenKeyType',
    interfaces: [AttributeEnum, Enum]
  };

  function KeyGenKeyType$values() {
    return [KeyGenKeyType$rsa_getInstance()];
  }

  KeyGenKeyType.values = KeyGenKeyType$values;

  function KeyGenKeyType$valueOf(name) {
    switch (name) {
      case 'rsa':
        return KeyGenKeyType$rsa_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.KeyGenKeyType.' + name);
    }
  }

  KeyGenKeyType.valueOf_61zpoe$ = KeyGenKeyType$valueOf;
  var keyGenKeyTypeValues;

  function LinkRel() {
    LinkRel_instance = this;
    this.alternate = 'Alternate';
    this.appEndIx = 'Appendix';
    this.bookmark = 'Bookmark';
    this.chapter = 'Chapter';
    this.contentS = 'Contents';
    this.copyright = 'Copyright';
    this.glossary = 'Glossary';
    this.help = 'Help';
    this.index = 'Index';
    this.next = 'Next';
    this.prev = 'Prev';
    this.section = 'Section';
    this.start = 'Start';
    this.stylesheet = 'Stylesheet';
    this.subsection = 'Subsection';
    this.values = listOf(['alternate', 'appEndIx', 'bookmark', 'chapter', 'contentS', 'copyright', 'glossary', 'help', 'index', 'next', 'prev', 'section', 'start', 'stylesheet', 'subsection']);
  }

  LinkRel.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'LinkRel',
    interfaces: []
  };
  var LinkRel_instance = null;

  function LinkRel_getInstance() {
    if (LinkRel_instance === null) {
      new LinkRel();
    }
    return LinkRel_instance;
  }

  function LinkMedia() {
    LinkMedia_instance = this;
    this.screen = 'screen';
    this.print = 'print';
    this.tty = 'tty';
    this.tv = 'tv';
    this.projection = 'projection';
    this.handheld = 'handheld';
    this.braille = 'braille';
    this.aural = 'aural';
    this.all = 'all';
    this.values = listOf(['screen', 'print', 'tty', 'tv', 'projection', 'handheld', 'braille', 'aural', 'all']);
  }

  LinkMedia.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'LinkMedia',
    interfaces: []
  };
  var LinkMedia_instance = null;

  function LinkMedia_getInstance() {
    if (LinkMedia_instance === null) {
      new LinkMedia();
    }
    return LinkMedia_instance;
  }

  function LinkType() {
    LinkType_instance = this;
    this.textAsp = 'text/asp';
    this.textAsa = 'text/asa';
    this.textCss = 'text/css';
    this.textHtml = 'text/html';
    this.textJavaScript = 'text/javascript';
    this.textPlain = 'text/plain';
    this.textScriptLet = 'text/scriptlet';
    this.textXComponent = 'text/x-component';
    this.textXHtmlInsertion = 'text/x-html-insertion';
    this.textXml = 'text/xml';
    this.values = listOf(['textAsp', 'textAsa', 'textCss', 'textHtml', 'textJavaScript', 'textPlain', 'textScriptLet', 'textXComponent', 'textXHtmlInsertion', 'textXml']);
  }

  LinkType.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'LinkType',
    interfaces: []
  };
  var LinkType_instance = null;

  function LinkType_getInstance() {
    if (LinkType_instance === null) {
      new LinkType();
    }
    return LinkType_instance;
  }

  function MetaHttpEquiv() {
    MetaHttpEquiv_instance = this;
    this.contentLanguage = 'content-language';
    this.contentType = 'content-type';
    this.defaultStyle = 'default-style';
    this.refresh = 'refresh';
    this.values = listOf(['contentLanguage', 'contentType', 'defaultStyle', 'refresh']);
  }

  MetaHttpEquiv.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'MetaHttpEquiv',
    interfaces: []
  };
  var MetaHttpEquiv_instance = null;

  function MetaHttpEquiv_getInstance() {
    if (MetaHttpEquiv_instance === null) {
      new MetaHttpEquiv();
    }
    return MetaHttpEquiv_instance;
  }

  function ObjectName() {
    ObjectName_instance = this;
    this.blank = '_blank';
    this.parent = '_parent';
    this.self = '_self';
    this.top = '_top';
    this.values = listOf(['blank', 'parent', 'self', 'top']);
  }

  ObjectName.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'ObjectName',
    interfaces: []
  };
  var ObjectName_instance = null;

  function ObjectName_getInstance() {
    if (ObjectName_instance === null) {
      new ObjectName();
    }
    return ObjectName_instance;
  }

  function ScriptType(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_qn1mbb$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function ScriptType_initFields() {
    ScriptType_initFields = function() {
    };
    ScriptType$textEcmaScript_instance = new ScriptType('textEcmaScript', 0, 'text/ecmascript');
    ScriptType$textJavaScript_instance = new ScriptType('textJavaScript', 1, 'text/javascript');
    ScriptType$textJavaScript10_instance = new ScriptType('textJavaScript10', 2, 'text/javascript1.0');
    ScriptType$textJavaScript11_instance = new ScriptType('textJavaScript11', 3, 'text/javascript1.1');
    ScriptType$textJavaScript12_instance = new ScriptType('textJavaScript12', 4, 'text/javascript1.2');
    ScriptType$textJavaScript13_instance = new ScriptType('textJavaScript13', 5, 'text/javascript1.3');
    ScriptType$textJavaScript14_instance = new ScriptType('textJavaScript14', 6, 'text/javascript1.4');
    ScriptType$textJavaScript15_instance = new ScriptType('textJavaScript15', 7, 'text/javascript1.5');
    ScriptType$textJScript_instance = new ScriptType('textJScript', 8, 'text/jscript');
    ScriptType$textXJavaScript_instance = new ScriptType('textXJavaScript', 9, 'text/x-javascript');
    ScriptType$textXEcmaScript_instance = new ScriptType('textXEcmaScript', 10, 'text/x-ecmascript');
    ScriptType$textVbScript_instance = new ScriptType('textVbScript', 11, 'text/vbscript');
  }

  Object.defineProperty(ScriptType.prototype, 'realValue', {
    get: function() {
      return this.realValue_qn1mbb$_0;
    }
  });
  var ScriptType$textEcmaScript_instance;

  function ScriptType$textEcmaScript_getInstance() {
    ScriptType_initFields();
    return ScriptType$textEcmaScript_instance;
  }

  var ScriptType$textJavaScript_instance;

  function ScriptType$textJavaScript_getInstance() {
    ScriptType_initFields();
    return ScriptType$textJavaScript_instance;
  }

  var ScriptType$textJavaScript10_instance;

  function ScriptType$textJavaScript10_getInstance() {
    ScriptType_initFields();
    return ScriptType$textJavaScript10_instance;
  }

  var ScriptType$textJavaScript11_instance;

  function ScriptType$textJavaScript11_getInstance() {
    ScriptType_initFields();
    return ScriptType$textJavaScript11_instance;
  }

  var ScriptType$textJavaScript12_instance;

  function ScriptType$textJavaScript12_getInstance() {
    ScriptType_initFields();
    return ScriptType$textJavaScript12_instance;
  }

  var ScriptType$textJavaScript13_instance;

  function ScriptType$textJavaScript13_getInstance() {
    ScriptType_initFields();
    return ScriptType$textJavaScript13_instance;
  }

  var ScriptType$textJavaScript14_instance;

  function ScriptType$textJavaScript14_getInstance() {
    ScriptType_initFields();
    return ScriptType$textJavaScript14_instance;
  }

  var ScriptType$textJavaScript15_instance;

  function ScriptType$textJavaScript15_getInstance() {
    ScriptType_initFields();
    return ScriptType$textJavaScript15_instance;
  }

  var ScriptType$textJScript_instance;

  function ScriptType$textJScript_getInstance() {
    ScriptType_initFields();
    return ScriptType$textJScript_instance;
  }

  var ScriptType$textXJavaScript_instance;

  function ScriptType$textXJavaScript_getInstance() {
    ScriptType_initFields();
    return ScriptType$textXJavaScript_instance;
  }

  var ScriptType$textXEcmaScript_instance;

  function ScriptType$textXEcmaScript_getInstance() {
    ScriptType_initFields();
    return ScriptType$textXEcmaScript_instance;
  }

  var ScriptType$textVbScript_instance;

  function ScriptType$textVbScript_getInstance() {
    ScriptType_initFields();
    return ScriptType$textVbScript_instance;
  }

  ScriptType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ScriptType',
    interfaces: [AttributeEnum, Enum]
  };

  function ScriptType$values() {
    return [ScriptType$textEcmaScript_getInstance(), ScriptType$textJavaScript_getInstance(), ScriptType$textJavaScript10_getInstance(), ScriptType$textJavaScript11_getInstance(), ScriptType$textJavaScript12_getInstance(), ScriptType$textJavaScript13_getInstance(), ScriptType$textJavaScript14_getInstance(), ScriptType$textJavaScript15_getInstance(), ScriptType$textJScript_getInstance(), ScriptType$textXJavaScript_getInstance(), ScriptType$textXEcmaScript_getInstance(), ScriptType$textVbScript_getInstance()];
  }

  ScriptType.values = ScriptType$values;

  function ScriptType$valueOf(name) {
    switch (name) {
      case 'textEcmaScript':
        return ScriptType$textEcmaScript_getInstance();
      case 'textJavaScript':
        return ScriptType$textJavaScript_getInstance();
      case 'textJavaScript10':
        return ScriptType$textJavaScript10_getInstance();
      case 'textJavaScript11':
        return ScriptType$textJavaScript11_getInstance();
      case 'textJavaScript12':
        return ScriptType$textJavaScript12_getInstance();
      case 'textJavaScript13':
        return ScriptType$textJavaScript13_getInstance();
      case 'textJavaScript14':
        return ScriptType$textJavaScript14_getInstance();
      case 'textJavaScript15':
        return ScriptType$textJavaScript15_getInstance();
      case 'textJScript':
        return ScriptType$textJScript_getInstance();
      case 'textXJavaScript':
        return ScriptType$textXJavaScript_getInstance();
      case 'textXEcmaScript':
        return ScriptType$textXEcmaScript_getInstance();
      case 'textVbScript':
        return ScriptType$textVbScript_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.ScriptType.' + name);
    }
  }

  ScriptType.valueOf_61zpoe$ = ScriptType$valueOf;
  var scriptTypeValues;

  function StyleType() {
    StyleType_instance = this;
    this.textCss = 'text/css';
    this.values = listOf_0('textCss');
  }

  StyleType.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'StyleType',
    interfaces: []
  };
  var StyleType_instance = null;

  function StyleType_getInstance() {
    if (StyleType_instance === null) {
      new StyleType();
    }
    return StyleType_instance;
  }

  function StyleMedia() {
    StyleMedia_instance = this;
    this.screen = 'screen';
    this.print = 'print';
    this.tty = 'tty';
    this.tv = 'tv';
    this.projection = 'projection';
    this.handheld = 'handheld';
    this.braille = 'braille';
    this.aural = 'aural';
    this.all = 'all';
    this.values = listOf(['screen', 'print', 'tty', 'tv', 'projection', 'handheld', 'braille', 'aural', 'all']);
  }

  StyleMedia.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'StyleMedia',
    interfaces: []
  };
  var StyleMedia_instance = null;

  function StyleMedia_getInstance() {
    if (StyleMedia_instance === null) {
      new StyleMedia();
    }
    return StyleMedia_instance;
  }

  function TextAreaWrap(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_97rypi$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function TextAreaWrap_initFields() {
    TextAreaWrap_initFields = function() {
    };
    TextAreaWrap$hard_instance = new TextAreaWrap('hard', 0, 'hard');
    TextAreaWrap$soft_instance = new TextAreaWrap('soft', 1, 'soft');
  }

  Object.defineProperty(TextAreaWrap.prototype, 'realValue', {
    get: function() {
      return this.realValue_97rypi$_0;
    }
  });
  var TextAreaWrap$hard_instance;

  function TextAreaWrap$hard_getInstance() {
    TextAreaWrap_initFields();
    return TextAreaWrap$hard_instance;
  }

  var TextAreaWrap$soft_instance;

  function TextAreaWrap$soft_getInstance() {
    TextAreaWrap_initFields();
    return TextAreaWrap$soft_instance;
  }

  TextAreaWrap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TextAreaWrap',
    interfaces: [AttributeEnum, Enum]
  };

  function TextAreaWrap$values() {
    return [TextAreaWrap$hard_getInstance(), TextAreaWrap$soft_getInstance()];
  }

  TextAreaWrap.values = TextAreaWrap$values;

  function TextAreaWrap$valueOf(name) {
    switch (name) {
      case 'hard':
        return TextAreaWrap$hard_getInstance();
      case 'soft':
        return TextAreaWrap$soft_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.TextAreaWrap.' + name);
    }
  }

  TextAreaWrap.valueOf_61zpoe$ = TextAreaWrap$valueOf;
  var textAreaWrapValues;

  function ThScope(name, ordinal, realValue) {
    Enum.call(this);
    this.realValue_bnf5k6$_0 = realValue;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function ThScope_initFields() {
    ThScope_initFields = function() {
    };
    ThScope$col_instance = new ThScope('col', 0, 'col');
    ThScope$colGroup_instance = new ThScope('colGroup', 1, 'colgroup');
    ThScope$row_instance = new ThScope('row', 2, 'row');
    ThScope$rowGroup_instance = new ThScope('rowGroup', 3, 'rowgroup');
  }

  Object.defineProperty(ThScope.prototype, 'realValue', {
    get: function() {
      return this.realValue_bnf5k6$_0;
    }
  });
  var ThScope$col_instance;

  function ThScope$col_getInstance() {
    ThScope_initFields();
    return ThScope$col_instance;
  }

  var ThScope$colGroup_instance;

  function ThScope$colGroup_getInstance() {
    ThScope_initFields();
    return ThScope$colGroup_instance;
  }

  var ThScope$row_instance;

  function ThScope$row_getInstance() {
    ThScope_initFields();
    return ThScope$row_instance;
  }

  var ThScope$rowGroup_instance;

  function ThScope$rowGroup_getInstance() {
    ThScope_initFields();
    return ThScope$rowGroup_instance;
  }

  ThScope.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ThScope',
    interfaces: [AttributeEnum, Enum]
  };

  function ThScope$values() {
    return [ThScope$col_getInstance(), ThScope$colGroup_getInstance(), ThScope$row_getInstance(), ThScope$rowGroup_getInstance()];
  }

  ThScope.values = ThScope$values;

  function ThScope$valueOf(name) {
    switch (name) {
      case 'col':
        return ThScope$col_getInstance();
      case 'colGroup':
        return ThScope$colGroup_getInstance();
      case 'row':
        return ThScope$row_getInstance();
      case 'rowGroup':
        return ThScope$rowGroup_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.ThScope.' + name);
    }
  }

  ThScope.valueOf_61zpoe$ = ThScope$valueOf;
  var thScopeValues;

  function MAP(initialAttributes, consumer) {
    HTMLTag.call(this, 'map', consumer, initialAttributes, null, true, false);
    this.consumer_6sczhy$_0 = consumer;
  }

  Object.defineProperty(MAP.prototype, 'consumer', {
    get: function() {
      return this.consumer_6sczhy$_0;
    }
  });
  Object.defineProperty(MAP.prototype, 'name', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  MAP.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MAP',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_8($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_8($receiver_17) {
    return $receiver_17;
  }

  function MARK(initialAttributes, consumer) {
    HTMLTag.call(this, 'mark', consumer, initialAttributes, null, true, false);
    this.consumer_2o5nep$_0 = consumer;
  }

  Object.defineProperty(MARK.prototype, 'consumer', {
    get: function() {
      return this.consumer_2o5nep$_0;
    }
  });
  MARK.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MARK',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_9($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_9($receiver_17) {
    return $receiver_17;
  }

  function MATH(initialAttributes, consumer) {
    HTMLTag.call(this, 'math', consumer, initialAttributes, null, false, false);
    this.consumer_2o5oti$_0 = consumer;
  }

  Object.defineProperty(MATH.prototype, 'consumer', {
    get: function() {
      return this.consumer_2o5oti$_0;
    }
  });
  MATH.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MATH',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_10($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_10($receiver_17) {
    return $receiver_17;
  }

  function MATHML(initialAttributes, consumer) {
    HTMLTag.call(this, 'mathml', consumer, initialAttributes, null, false, false);
    this.consumer_9ru0br$_0 = consumer;
  }

  Object.defineProperty(MATHML.prototype, 'consumer', {
    get: function() {
      return this.consumer_9ru0br$_0;
    }
  });
  MATHML.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MATHML',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };

  function META(initialAttributes, consumer) {
    HTMLTag.call(this, 'meta', consumer, initialAttributes, null, false, true);
    this.consumer_2o88ll$_0 = consumer;
  }

  Object.defineProperty(META.prototype, 'consumer', {
    get: function() {
      return this.consumer_2o88ll$_0;
    }
  });
  Object.defineProperty(META.prototype, 'httpEquiv', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'http-equiv');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'http-equiv', newValue);
    }
  });
  Object.defineProperty(META.prototype, 'name', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  Object.defineProperty(META.prototype, 'content', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'content');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'content', newValue);
    }
  });
  Object.defineProperty(META.prototype, 'charset', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'charset');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'charset', newValue);
    }
  });
  META.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'META',
    interfaces: [CommonAttributeGroupFacadeFlowMetaDataPhrasingContent, HTMLTag]
  };

  function get_asFlowContent_11($receiver_17) {
    return $receiver_17;
  }

  function get_asMetaDataContent($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_11($receiver_17) {
    return $receiver_17;
  }

  function METER(initialAttributes, consumer) {
    HTMLTag.call(this, 'meter', consumer, initialAttributes, null, true, false);
    this.consumer_btzg71$_0 = consumer;
  }

  Object.defineProperty(METER.prototype, 'consumer', {
    get: function() {
      return this.consumer_btzg71$_0;
    }
  });
  Object.defineProperty(METER.prototype, 'value', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'value');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'value', newValue);
    }
  });
  Object.defineProperty(METER.prototype, 'min', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'min');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'min', newValue);
    }
  });
  Object.defineProperty(METER.prototype, 'max', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'max');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'max', newValue);
    }
  });
  Object.defineProperty(METER.prototype, 'low', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'low');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'low', newValue);
    }
  });
  Object.defineProperty(METER.prototype, 'high', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'high');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'high', newValue);
    }
  });
  Object.defineProperty(METER.prototype, 'optimum', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'optimum');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'optimum', newValue);
    }
  });
  METER.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'METER',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_12($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_12($receiver_17) {
    return $receiver_17;
  }

  function FlowContent() {
  }

  FlowContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'FlowContent',
    interfaces: [SectioningOrFlowContent, FlowOrPhrasingContent, FlowOrInteractiveContent, FlowOrInteractiveOrPhrasingContent, FlowOrMetaDataContent, FlowOrPhrasingOrMetaDataContent, FlowOrHeadingContent, Tag]
  };

  function HeadingContent() {
  }

  HeadingContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'HeadingContent',
    interfaces: [FlowOrHeadingContent, Tag]
  };

  function InteractiveContent() {
  }

  InteractiveContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'InteractiveContent',
    interfaces: [FlowOrInteractiveContent, FlowOrInteractiveOrPhrasingContent, Tag]
  };

  function MetaDataContent() {
  }

  MetaDataContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'MetaDataContent',
    interfaces: [Tag]
  };

  function PhrasingContent() {
  }

  PhrasingContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'PhrasingContent',
    interfaces: [FlowOrPhrasingContent, FlowOrPhrasingOrMetaDataContent, FlowOrInteractiveOrPhrasingContent, Tag]
  };

  function SectioningContent() {
  }

  SectioningContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'SectioningContent',
    interfaces: [SectioningOrFlowContent, Tag]
  };

  function address$lambda_0($receiver_17) {
  }

  function address_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = address$lambda_0;
    visit(new ADDRESS(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function blockQuote$lambda_0($receiver_17) {
  }

  function blockQuote_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = blockQuote$lambda_0;
    visit(new BLOCKQUOTE(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function dialog$lambda_0($receiver_17) {
  }

  function dialog_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dialog$lambda_0;
    visit(new DIALOG(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function div$lambda_0($receiver_17) {
  }

  function div_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = div$lambda_0;
    visit(new DIV(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function dl$lambda_0($receiver_17) {
  }

  function dl_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dl$lambda_0;
    visit(new DL(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function fieldSet$lambda_0($receiver_17) {
  }

  function fieldSet_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = fieldSet$lambda_0;
    visit(new FIELDSET(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function figure$lambda_0($receiver_17) {
  }

  function figure_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = figure$lambda_0;
    visit(new FIGURE(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function figcaption$lambda_0($receiver_17) {
  }

  function figcaption_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = figcaption$lambda_0;
    visit(new FIGCAPTION(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function footer$lambda_0($receiver_17) {
  }

  function footer_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = footer$lambda_0;
    visit(new FOOTER(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function form$lambda_0($receiver_17) {
  }

  function form_0($receiver_17, action, encType, method, classes, block) {
    if (action === void 0)
      action = null;
    if (encType === void 0)
      encType = null;
    if (method === void 0)
      method = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = form$lambda_0;
    visit(new FORM(attributesMapOf(['action', action, 'enctype', encType != null ? enumEncode(encType) : null, 'method', method != null ? enumEncode(method) : null, 'class', classes]), $receiver_17.consumer), block);
  }

  function getForm$lambda($receiver_17) {
  }

  function getForm($receiver_17, action, encType, classes, block) {
    if (action === void 0)
      action = null;
    if (encType === void 0)
      encType = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = getForm$lambda;
    visit(new FORM(attributesMapOf(['action', action, 'enctype', encType != null ? enumEncode(encType) : null, 'method', FormMethod$get_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function postForm$lambda($receiver_17) {
  }

  function postForm($receiver_17, action, encType, classes, block) {
    if (action === void 0)
      action = null;
    if (encType === void 0)
      encType = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = postForm$lambda;
    visit(new FORM(attributesMapOf(['action', action, 'enctype', encType != null ? enumEncode(encType) : null, 'method', FormMethod$post_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function putForm$lambda($receiver_17) {
  }

  function putForm($receiver_17, action, encType, classes, block) {
    if (action === void 0)
      action = null;
    if (encType === void 0)
      encType = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = putForm$lambda;
    visit(new FORM(attributesMapOf(['action', action, 'enctype', encType != null ? enumEncode(encType) : null, 'method', FormMethod$put_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function deleteForm$lambda($receiver_17) {
  }

  function deleteForm($receiver_17, action, encType, classes, block) {
    if (action === void 0)
      action = null;
    if (encType === void 0)
      encType = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = deleteForm$lambda;
    visit(new FORM(attributesMapOf(['action', action, 'enctype', encType != null ? enumEncode(encType) : null, 'method', FormMethod$delete_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function header$lambda_0($receiver_17) {
  }

  function header_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = header$lambda_0;
    visit(new HEADER(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function hr$lambda_0($receiver_17) {
  }

  function hr_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = hr$lambda_0;
    visit(new HR(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function ol$lambda_0($receiver_17) {
  }

  function ol_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = ol$lambda_0;
    visit(new OL(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function p$lambda_0($receiver_17) {
  }

  function p_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = p$lambda_0;
    visit(new P(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function pre$lambda_0($receiver_17) {
  }

  function pre_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = pre$lambda_0;
    visit(new PRE(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function table$lambda_0($receiver_17) {
  }

  function table_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = table$lambda_0;
    visit(new TABLE(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function ul$lambda_0($receiver_17) {
  }

  function ul_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = ul$lambda_0;
    visit(new UL(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function base$lambda_0($receiver_17) {
  }

  function base_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = base$lambda_0;
    visit(new BASE(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function command$lambda_0($receiver_17) {
  }

  function command_0($receiver_17, type, classes, block) {
    if (type === void 0)
      type = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = command$lambda_0;
    visit(new COMMAND(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver_17.consumer), block);
  }

  function commandCommand$lambda($receiver_17) {
  }

  function commandCommand($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = commandCommand$lambda;
    visit(new COMMAND(attributesMapOf(['type', CommandType$command_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function checkBoxCommand$lambda($receiver_17) {
  }

  function checkBoxCommand($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = checkBoxCommand$lambda;
    visit(new COMMAND(attributesMapOf(['type', CommandType$checkBox_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function radioCommand$lambda($receiver_17) {
  }

  function radioCommand($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = radioCommand$lambda;
    visit(new COMMAND(attributesMapOf(['type', CommandType$radio_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function link$lambda_0($receiver_17) {
  }

  function link_0($receiver_17, href, rel, type, block) {
    if (href === void 0)
      href = null;
    if (rel === void 0)
      rel = null;
    if (type === void 0)
      type = null;
    if (block === void 0)
      block = link$lambda_0;
    visit(new LINK(attributesMapOf(['href', href, 'rel', rel, 'type', type]), $receiver_17.consumer), block);
  }

  function meta$lambda_0($receiver_17) {
  }

  function meta_0($receiver_17, name, content, block) {
    if (name === void 0)
      name = null;
    if (content === void 0)
      content = null;
    if (block === void 0)
      block = meta$lambda_0;
    visit(new META(attributesMapOf(['name', name, 'content', content]), $receiver_17.consumer), block);
  }

  function noScript$lambda_0($receiver_17) {
  }

  function noScript_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = noScript$lambda_0;
    visit(new NOSCRIPT(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function script$lambda_0($receiver_17) {
  }

  function script_0($receiver_17, type, src, block) {
    if (type === void 0)
      type = null;
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = script$lambda_0;
    visit(new SCRIPT(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'src', src]), $receiver_17.consumer), block);
  }

  function textEcmaScriptScript$lambda($receiver_17) {
  }

  function textEcmaScriptScript($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textEcmaScriptScript$lambda;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textEcmaScript_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textJavaScriptScript$lambda($receiver_17) {
  }

  function textJavaScriptScript($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textJavaScriptScript$lambda;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textJavaScript_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textJavaScript10Script$lambda($receiver_17) {
  }

  function textJavaScript10Script($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textJavaScript10Script$lambda;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textJavaScript10_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textJavaScript11Script$lambda($receiver_17) {
  }

  function textJavaScript11Script($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textJavaScript11Script$lambda;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textJavaScript11_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textJavaScript12Script$lambda($receiver_17) {
  }

  function textJavaScript12Script($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textJavaScript12Script$lambda;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textJavaScript12_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textJavaScript13Script$lambda($receiver_17) {
  }

  function textJavaScript13Script($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textJavaScript13Script$lambda;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textJavaScript13_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textJavaScript14Script$lambda($receiver_17) {
  }

  function textJavaScript14Script($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textJavaScript14Script$lambda;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textJavaScript14_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textJavaScript15Script$lambda($receiver_17) {
  }

  function textJavaScript15Script($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textJavaScript15Script$lambda;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textJavaScript15_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textJScriptScript$lambda($receiver_17) {
  }

  function textJScriptScript($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textJScriptScript$lambda;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textJScript_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textXJavaScriptScript$lambda($receiver_17) {
  }

  function textXJavaScriptScript($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textXJavaScriptScript$lambda;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textXJavaScript_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textXEcmaScriptScript$lambda($receiver_17) {
  }

  function textXEcmaScriptScript($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textXEcmaScriptScript$lambda;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textXEcmaScript_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textVbScriptScript$lambda($receiver_17) {
  }

  function textVbScriptScript($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textVbScriptScript$lambda;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textVbScript_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function style$lambda_1($receiver_17) {
  }

  function style_1($receiver_17, type, block) {
    if (type === void 0)
      type = null;
    if (block === void 0)
      block = style$lambda_1;
    visit(new STYLE(attributesMapOf_0('type', type), $receiver_17.consumer), block);
  }

  function style$lambda_2(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function style_2($receiver_17, type, content) {
    if (type === void 0)
      type = null;
    if (content === void 0)
      content = '';
    visit(new STYLE(attributesMapOf_0('type', type), $receiver_17.consumer), style$lambda_2(content));
  }

  function title$lambda_1($receiver_17) {
  }

  function title_1($receiver_17, block) {
    if (block === void 0)
      block = title$lambda_1;
    visit(new TITLE(emptyMap, $receiver_17.consumer), block);
  }

  function title$lambda_2(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function title_2($receiver_17, content) {
    if (content === void 0)
      content = '';
    visit(new TITLE(emptyMap, $receiver_17.consumer), title$lambda_2(content));
  }

  function RP(initialAttributes, consumer) {
    HTMLTag.call(this, 'rp', consumer, initialAttributes, null, true, false);
    this.consumer_tkgho0$_0 = consumer;
  }

  Object.defineProperty(RP.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkgho0$_0;
    }
  });
  RP.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RP',
    interfaces: [HtmlInlineTag, HTMLTag]
  };

  function RT(initialAttributes, consumer) {
    HTMLTag.call(this, 'rt', consumer, initialAttributes, null, true, false);
    this.consumer_tkghrg$_0 = consumer;
  }

  Object.defineProperty(RT.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkghrg$_0;
    }
  });
  RT.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RT',
    interfaces: [HtmlInlineTag, HTMLTag]
  };

  function RUBY(initialAttributes, consumer) {
    HTMLTag.call(this, 'ruby', consumer, initialAttributes, null, true, false);
    this.consumer_2r92l0$_0 = consumer;
  }

  Object.defineProperty(RUBY.prototype, 'consumer', {
    get: function() {
      return this.consumer_2r92l0$_0;
    }
  });
  RUBY.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RUBY',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function rt$lambda_0($receiver_17) {
  }

  function rt_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = rt$lambda_0;
    visit(new RT(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function rp$lambda_0($receiver_17) {
  }

  function rp_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = rp$lambda_0;
    visit(new RP(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function get_asFlowContent_13($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_13($receiver_17) {
    return $receiver_17;
  }

  function P(initialAttributes, consumer) {
    HTMLTag.call(this, 'p', consumer, initialAttributes, null, false, false);
    this.consumer_lkq3ee$_0 = consumer;
  }

  Object.defineProperty(P.prototype, 'consumer', {
    get: function() {
      return this.consumer_lkq3ee$_0;
    }
  });
  P.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'P',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_14($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_14($receiver_17) {
    return $receiver_17;
  }

  function PARAM(initialAttributes, consumer) {
    HTMLTag.call(this, 'param', consumer, initialAttributes, null, true, true);
    this.consumer_d6vry1$_0 = consumer;
  }

  Object.defineProperty(PARAM.prototype, 'consumer', {
    get: function() {
      return this.consumer_d6vry1$_0;
    }
  });
  Object.defineProperty(PARAM.prototype, 'name', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  Object.defineProperty(PARAM.prototype, 'value', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'value');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'value', newValue);
    }
  });
  PARAM.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PARAM',
    interfaces: [HTMLTag]
  };

  function PRE(initialAttributes, consumer) {
    HTMLTag.call(this, 'pre', consumer, initialAttributes, null, false, false);
    this.consumer_6saq71$_0 = consumer;
  }

  Object.defineProperty(PRE.prototype, 'consumer', {
    get: function() {
      return this.consumer_6saq71$_0;
    }
  });
  PRE.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PRE',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_15($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_15($receiver_17) {
    return $receiver_17;
  }

  function PROGRESS(initialAttributes, consumer) {
    HTMLTag.call(this, 'progress', consumer, initialAttributes, null, true, false);
    this.consumer_cpgs67$_0 = consumer;
  }

  Object.defineProperty(PROGRESS.prototype, 'consumer', {
    get: function() {
      return this.consumer_cpgs67$_0;
    }
  });
  Object.defineProperty(PROGRESS.prototype, 'value', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'value');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'value', newValue);
    }
  });
  Object.defineProperty(PROGRESS.prototype, 'max', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'max');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'max', newValue);
    }
  });
  PROGRESS.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PROGRESS',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_16($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_16($receiver_17) {
    return $receiver_17;
  }

  function FIELDSET(initialAttributes, consumer) {
    HTMLTag.call(this, 'fieldset', consumer, initialAttributes, null, false, false);
    this.consumer_o9230m$_0 = consumer;
  }

  Object.defineProperty(FIELDSET.prototype, 'consumer', {
    get: function() {
      return this.consumer_o9230m$_0;
    }
  });
  Object.defineProperty(FIELDSET.prototype, 'disabled', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(FIELDSET.prototype, 'form', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(FIELDSET.prototype, 'name', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  FIELDSET.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FIELDSET',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function legEnd$lambda_0($receiver_17) {
  }

  function legEnd_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = legEnd$lambda_0;
    visit(new LEGEND(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function FIGCAPTION(initialAttributes, consumer) {
    HTMLTag.call(this, 'figcaption', consumer, initialAttributes, null, false, false);
    this.consumer_1luu5w$_0 = consumer;
  }

  Object.defineProperty(FIGCAPTION.prototype, 'consumer', {
    get: function() {
      return this.consumer_1luu5w$_0;
    }
  });
  FIGCAPTION.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FIGCAPTION',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function FIGURE(initialAttributes, consumer) {
    HTMLTag.call(this, 'figure', consumer, initialAttributes, null, false, false);
    this.consumer_icdvg6$_0 = consumer;
  }

  Object.defineProperty(FIGURE.prototype, 'consumer', {
    get: function() {
      return this.consumer_icdvg6$_0;
    }
  });
  FIGURE.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FIGURE',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function legEnd$lambda_1($receiver_17) {
  }

  function legEnd_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = legEnd$lambda_1;
    visit(new LEGEND(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function figcaption$lambda_1($receiver_17) {
  }

  function figcaption_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = figcaption$lambda_1;
    visit(new FIGCAPTION(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function FOOTER(initialAttributes, consumer) {
    HTMLTag.call(this, 'footer', consumer, initialAttributes, null, false, false);
    this.consumer_fdqonh$_0 = consumer;
  }

  Object.defineProperty(FOOTER.prototype, 'consumer', {
    get: function() {
      return this.consumer_fdqonh$_0;
    }
  });
  FOOTER.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FOOTER',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function FORM(initialAttributes, consumer) {
    HTMLTag.call(this, 'form', consumer, initialAttributes, null, false, false);
    this.consumer_2kk14a$_0 = consumer;
  }

  Object.defineProperty(FORM.prototype, 'consumer', {
    get: function() {
      return this.consumer_2kk14a$_0;
    }
  });
  Object.defineProperty(FORM.prototype, 'acceptCharset', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'accept-charset');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'accept-charset', newValue);
    }
  });
  Object.defineProperty(FORM.prototype, 'action', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'action');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'action', newValue);
    }
  });
  Object.defineProperty(FORM.prototype, 'autoComplete', {
    get: function() {
      return attributeBooleanBooleanOnOff.get_txhc1s$(this, 'autocomplete');
    },
    set: function(newValue) {
      attributeBooleanBooleanOnOff.set_fid0sb$(this, 'autocomplete', newValue);
    }
  });
  Object.defineProperty(FORM.prototype, 'encType', {
    get: function() {
      return attributeFormEncTypeEnumFormEncTypeValues.get_txhc1s$(this, 'enctype');
    },
    set: function(newValue) {
      attributeFormEncTypeEnumFormEncTypeValues.set_fid0sb$(this, 'enctype', newValue);
    }
  });
  Object.defineProperty(FORM.prototype, 'method', {
    get: function() {
      return attributeFormMethodEnumFormMethodValues.get_txhc1s$(this, 'method');
    },
    set: function(newValue) {
      attributeFormMethodEnumFormMethodValues.set_fid0sb$(this, 'method', newValue);
    }
  });
  Object.defineProperty(FORM.prototype, 'name', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  Object.defineProperty(FORM.prototype, 'novalidate', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'novalidate');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'novalidate', newValue);
    }
  });
  Object.defineProperty(FORM.prototype, 'target', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'target');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'target', newValue);
    }
  });
  FORM.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FORM',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function NAV(initialAttributes, consumer) {
    HTMLTag.call(this, 'nav', consumer, initialAttributes, null, false, false);
    this.consumer_6sccd9$_0 = consumer;
  }

  Object.defineProperty(NAV.prototype, 'consumer', {
    get: function() {
      return this.consumer_6sccd9$_0;
    }
  });
  NAV.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'NAV',
    interfaces: [CommonAttributeGroupFacadeFlowSectioningContent, HTMLTag]
  };

  function get_asFlowContent_17($receiver_17) {
    return $receiver_17;
  }

  function get_asSectioningContent($receiver_17) {
    return $receiver_17;
  }

  function NOSCRIPT(initialAttributes, consumer) {
    HTMLTag.call(this, 'noscript', consumer, initialAttributes, null, false, false);
    this.consumer_hfczaa$_0 = consumer;
  }

  Object.defineProperty(NOSCRIPT.prototype, 'consumer', {
    get: function() {
      return this.consumer_hfczaa$_0;
    }
  });
  NOSCRIPT.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'NOSCRIPT',
    interfaces: [CommonAttributeGroupFacadeFlowMetaDataPhrasingContent, HTMLTag]
  };

  function get_asFlowContent_18($receiver_17) {
    return $receiver_17;
  }

  function get_asMetaDataContent_0($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_17($receiver_17) {
    return $receiver_17;
  }

  function VAR_(initialAttributes, consumer) {
    HTMLTag.call(this, 'var', consumer, initialAttributes, null, true, false);
    this.consumer_2t3t86$_0 = consumer;
  }

  Object.defineProperty(VAR_.prototype, 'consumer', {
    get: function() {
      return this.consumer_2t3t86$_0;
    }
  });
  VAR_.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VAR_',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_19($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_18($receiver_17) {
    return $receiver_17;
  }

  function VIDEO(initialAttributes, consumer) {
    HTMLTag.call(this, 'video', consumer, initialAttributes, null, false, false);
    this.consumer_g5b097$_0 = consumer;
  }

  Object.defineProperty(VIDEO.prototype, 'consumer', {
    get: function() {
      return this.consumer_g5b097$_0;
    }
  });
  Object.defineProperty(VIDEO.prototype, 'src', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'src');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'src', newValue);
    }
  });
  Object.defineProperty(VIDEO.prototype, 'autoBuffer', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'autobuffer');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autobuffer', newValue);
    }
  });
  Object.defineProperty(VIDEO.prototype, 'autoPlay', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'autoplay');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autoplay', newValue);
    }
  });
  Object.defineProperty(VIDEO.prototype, 'loop', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'loop');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'loop', newValue);
    }
  });
  Object.defineProperty(VIDEO.prototype, 'controls', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'controls');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'controls', newValue);
    }
  });
  Object.defineProperty(VIDEO.prototype, 'width', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'width');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'width', newValue);
    }
  });
  Object.defineProperty(VIDEO.prototype, 'height', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'height');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'height', newValue);
    }
  });
  Object.defineProperty(VIDEO.prototype, 'poster', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'poster');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'poster', newValue);
    }
  });
  VIDEO.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VIDEO',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };

  function source$lambda_0($receiver_17) {
  }

  function source_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = source$lambda_0;
    visit(new SOURCE(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function get_asFlowContent_20($receiver_17) {
    return $receiver_17;
  }

  function get_asInteractiveContent_4($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_19($receiver_17) {
    return $receiver_17;
  }

  function KBD(initialAttributes, consumer) {
    HTMLTag.call(this, 'kbd', consumer, initialAttributes, null, true, false);
    this.consumer_6se90n$_0 = consumer;
  }

  Object.defineProperty(KBD.prototype, 'consumer', {
    get: function() {
      return this.consumer_6se90n$_0;
    }
  });
  KBD.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'KBD',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_21($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_20($receiver_17) {
    return $receiver_17;
  }

  function KEYGEN(initialAttributes, consumer) {
    HTMLTag.call(this, 'keygen', consumer, initialAttributes, null, true, true);
    this.consumer_hm1wg3$_0 = consumer;
  }

  Object.defineProperty(KEYGEN.prototype, 'consumer', {
    get: function() {
      return this.consumer_hm1wg3$_0;
    }
  });
  Object.defineProperty(KEYGEN.prototype, 'autoFocus', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'autofocus');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autofocus', newValue);
    }
  });
  Object.defineProperty(KEYGEN.prototype, 'challenge', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'challenge');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'challenge', newValue);
    }
  });
  Object.defineProperty(KEYGEN.prototype, 'disabled', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(KEYGEN.prototype, 'form', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(KEYGEN.prototype, 'keyType', {
    get: function() {
      return attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues.get_txhc1s$(this, 'keytype');
    },
    set: function(newValue) {
      attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues.set_fid0sb$(this, 'keytype', newValue);
    }
  });
  Object.defineProperty(KEYGEN.prototype, 'name', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  KEYGEN.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'KEYGEN',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };

  function get_asFlowContent_22($receiver_17) {
    return $receiver_17;
  }

  function get_asInteractiveContent_5($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_21($receiver_17) {
    return $receiver_17;
  }

  function CommonAttributeGroupFacade() {
  }

  CommonAttributeGroupFacade.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'CommonAttributeGroupFacade',
    interfaces: [Tag]
  };

  function get_enableTheming($receiver_17) {
    return attributeBooleanBoolean.get_txhc1s$($receiver_17, 'EnableTheming');
  }

  function set_enableTheming($receiver_17, newValue) {
    attributeBooleanBoolean.set_fid0sb$($receiver_17, 'EnableTheming', newValue);
  }

  function get_enableViewState($receiver_17) {
    return attributeBooleanBoolean.get_txhc1s$($receiver_17, 'EnableViewState');
  }

  function set_enableViewState($receiver_17, newValue) {
    attributeBooleanBoolean.set_fid0sb$($receiver_17, 'EnableViewState', newValue);
  }

  function get_skinID($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'SkinID');
  }

  function set_skinID($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'SkinID', newValue);
  }

  function get_visible($receiver_17) {
    return attributeBooleanBoolean.get_txhc1s$($receiver_17, 'Visible');
  }

  function set_visible($receiver_17, newValue) {
    attributeBooleanBoolean.set_fid0sb$($receiver_17, 'Visible', newValue);
  }

  function get_accessKey($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'accesskey');
  }

  function set_accessKey($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'accesskey', newValue);
  }

  function get_classes($receiver_17) {
    return attributeSetStringStringSet.get_txhc1s$($receiver_17, 'class');
  }

  function set_classes($receiver_17, newValue) {
    attributeSetStringStringSet.set_fid0sb$($receiver_17, 'class', newValue);
  }

  function get_contentEditable($receiver_17) {
    return attributeBooleanBoolean.get_txhc1s$($receiver_17, 'contenteditable');
  }

  function set_contentEditable($receiver_17, newValue) {
    attributeBooleanBoolean.set_fid0sb$($receiver_17, 'contenteditable', newValue);
  }

  function get_contextMenu($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'contextmenu');
  }

  function set_contextMenu($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'contextmenu', newValue);
  }

  function get_dataFolderName($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'data-FolderName');
  }

  function set_dataFolderName($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'data-FolderName', newValue);
  }

  function get_dataMsgId($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'data-MsgId');
  }

  function set_dataMsgId($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'data-MsgId', newValue);
  }

  function get_dir($receiver_17) {
    return attributeDirEnumDirValues.get_txhc1s$($receiver_17, 'dir');
  }

  function set_dir($receiver_17, newValue) {
    attributeDirEnumDirValues.set_fid0sb$($receiver_17, 'dir', newValue);
  }

  function get_draggable($receiver_17) {
    return attributeDraggableEnumDraggableValues.get_txhc1s$($receiver_17, 'draggable');
  }

  function set_draggable($receiver_17, newValue) {
    attributeDraggableEnumDraggableValues.set_fid0sb$($receiver_17, 'draggable', newValue);
  }

  function get_hidden($receiver_17) {
    return attributeBooleanTicker.get_txhc1s$($receiver_17, 'hidden');
  }

  function set_hidden($receiver_17, newValue) {
    attributeBooleanTicker.set_fid0sb$($receiver_17, 'hidden', newValue);
  }

  function get_id($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'id');
  }

  function set_id($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'id', newValue);
  }

  function get_itemProp($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'itemprop');
  }

  function set_itemProp($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'itemprop', newValue);
  }

  function get_onAbort($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onabort');
  }

  function set_onAbort($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onabort', newValue);
  }

  function get_onBlur($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onblur');
  }

  function set_onBlur($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onblur', newValue);
  }

  function get_onCanPlay($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'oncanplay');
  }

  function set_onCanPlay($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'oncanplay', newValue);
  }

  function get_onCanPlayThrough($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'oncanplaythrough');
  }

  function set_onCanPlayThrough($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'oncanplaythrough', newValue);
  }

  function get_onChange($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onchange');
  }

  function set_onChange($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onchange', newValue);
  }

  function get_onClick($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onclick');
  }

  function set_onClick($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onclick', newValue);
  }

  function get_onContextMenu($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'oncontextmenu');
  }

  function set_onContextMenu($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'oncontextmenu', newValue);
  }

  function get_onDoubleClick($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'ondblclick');
  }

  function set_onDoubleClick($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'ondblclick', newValue);
  }

  function get_onDrag($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'ondrag');
  }

  function set_onDrag($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'ondrag', newValue);
  }

  function get_onDragEnter($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'ondragenter');
  }

  function set_onDragEnter($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'ondragenter', newValue);
  }

  function get_onDragLeave($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'ondragleave');
  }

  function set_onDragLeave($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'ondragleave', newValue);
  }

  function get_onDragOver($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'ondragover');
  }

  function set_onDragOver($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'ondragover', newValue);
  }

  function get_onDragStart($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'ondragstart');
  }

  function set_onDragStart($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'ondragstart', newValue);
  }

  function get_onDrop($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'ondrop');
  }

  function set_onDrop($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'ondrop', newValue);
  }

  function get_onDurationChange($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'ondurationchange');
  }

  function set_onDurationChange($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'ondurationchange', newValue);
  }

  function get_onEmptied($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onemptied');
  }

  function set_onEmptied($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onemptied', newValue);
  }

  function get_onEnded($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onended');
  }

  function set_onEnded($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onended', newValue);
  }

  function get_onError($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onerror');
  }

  function set_onError($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onerror', newValue);
  }

  function get_onFocus($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onfocus');
  }

  function set_onFocus($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onfocus', newValue);
  }

  function get_onFormChange($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onformchange');
  }

  function set_onFormChange($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onformchange', newValue);
  }

  function get_onFormInput($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onforminput');
  }

  function set_onFormInput($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onforminput', newValue);
  }

  function get_onInput($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'oninput');
  }

  function set_onInput($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'oninput', newValue);
  }

  function get_onInvalid($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'oninvalid');
  }

  function set_onInvalid($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'oninvalid', newValue);
  }

  function get_onKeyDown($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onkeydown');
  }

  function set_onKeyDown($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onkeydown', newValue);
  }

  function get_onKeyPress($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onkeypress');
  }

  function set_onKeyPress($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onkeypress', newValue);
  }

  function get_onKeyUp($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onkeyup');
  }

  function set_onKeyUp($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onkeyup', newValue);
  }

  function get_onLoad($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onload');
  }

  function set_onLoad($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onload', newValue);
  }

  function get_onLoadedData($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onloadeddata');
  }

  function set_onLoadedData($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onloadeddata', newValue);
  }

  function get_onLoadedMetaData($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onloadedmetadata');
  }

  function set_onLoadedMetaData($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onloadedmetadata', newValue);
  }

  function get_onLoadStart($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onloadstart');
  }

  function set_onLoadStart($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onloadstart', newValue);
  }

  function get_onMouseDown($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onmousedown');
  }

  function set_onMouseDown($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onmousedown', newValue);
  }

  function get_onMouseMove($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onmousemove');
  }

  function set_onMouseMove($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onmousemove', newValue);
  }

  function get_onMouseOut($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onmouseout');
  }

  function set_onMouseOut($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onmouseout', newValue);
  }

  function get_onMouseOver($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onmouseover');
  }

  function set_onMouseOver($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onmouseover', newValue);
  }

  function get_onMouseUp($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onmouseup');
  }

  function set_onMouseUp($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onmouseup', newValue);
  }

  function get_onMouseWheel($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onmousewheel');
  }

  function set_onMouseWheel($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onmousewheel', newValue);
  }

  function get_onPause($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onpause');
  }

  function set_onPause($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onpause', newValue);
  }

  function get_onPlay($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onplay');
  }

  function set_onPlay($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onplay', newValue);
  }

  function get_onPlaying($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onplaying');
  }

  function set_onPlaying($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onplaying', newValue);
  }

  function get_onProgress($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onprogress');
  }

  function set_onProgress($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onprogress', newValue);
  }

  function get_onRateChange($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onratechange');
  }

  function set_onRateChange($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onratechange', newValue);
  }

  function get_onReadyStateChange($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onreadystatechange');
  }

  function set_onReadyStateChange($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onreadystatechange', newValue);
  }

  function get_onScroll($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onscroll');
  }

  function set_onScroll($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onscroll', newValue);
  }

  function get_onSeeked($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onseeked');
  }

  function set_onSeeked($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onseeked', newValue);
  }

  function get_onSeeking($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onseeking');
  }

  function set_onSeeking($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onseeking', newValue);
  }

  function get_onSelect($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onselect');
  }

  function set_onSelect($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onselect', newValue);
  }

  function get_onShow($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onshow');
  }

  function set_onShow($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onshow', newValue);
  }

  function get_onStalled($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onstalled');
  }

  function set_onStalled($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onstalled', newValue);
  }

  function get_onSubmit($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onsubmit');
  }

  function set_onSubmit($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onsubmit', newValue);
  }

  function get_onSuspend($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onsuspend');
  }

  function set_onSuspend($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onsuspend', newValue);
  }

  function get_onTimeUpdate($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'ontimeupdate');
  }

  function set_onTimeUpdate($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'ontimeupdate', newValue);
  }

  function get_onVolumeChange($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onvolumechange');
  }

  function set_onVolumeChange($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onvolumechange', newValue);
  }

  function get_onWaiting($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'onwaiting');
  }

  function set_onWaiting($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'onwaiting', newValue);
  }

  function get_role($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'role');
  }

  function set_role($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'role', newValue);
  }

  function get_runAt($receiver_17) {
    return attributeRunAtEnumRunAtValues.get_txhc1s$($receiver_17, 'runat');
  }

  function set_runAt($receiver_17, newValue) {
    attributeRunAtEnumRunAtValues.set_fid0sb$($receiver_17, 'runat', newValue);
  }

  function get_spellCheck($receiver_17) {
    return attributeBooleanBoolean.get_txhc1s$($receiver_17, 'spellcheck');
  }

  function set_spellCheck($receiver_17, newValue) {
    attributeBooleanBoolean.set_fid0sb$($receiver_17, 'spellcheck', newValue);
  }

  function get_style($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'style');
  }

  function set_style($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'style', newValue);
  }

  function get_subject($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'subject');
  }

  function set_subject($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'subject', newValue);
  }

  function get_tabIndex($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'tabIndex');
  }

  function set_tabIndex($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'tabIndex', newValue);
  }

  function get_title($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'title');
  }

  function set_title($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'title', newValue);
  }

  function FormServerAttributeGroupFacade() {
  }

  FormServerAttributeGroupFacade.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'FormServerAttributeGroupFacade',
    interfaces: [Tag]
  };

  function get_defaultButton($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'DefaultButton');
  }

  function set_defaultButton($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'DefaultButton', newValue);
  }

  function get_defaultFocus($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'DefaultFocus');
  }

  function set_defaultFocus($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'DefaultFocus', newValue);
  }

  function get_submitDisabledControls($receiver_17) {
    return attributeBooleanBoolean.get_txhc1s$($receiver_17, 'SubmitDisabledControls');
  }

  function set_submitDisabledControls($receiver_17, newValue) {
    attributeBooleanBoolean.set_fid0sb$($receiver_17, 'SubmitDisabledControls', newValue);
  }

  function InputServerAttributeGroupFacade() {
  }

  InputServerAttributeGroupFacade.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'InputServerAttributeGroupFacade',
    interfaces: [Tag]
  };

  function get_causesValidation($receiver_17) {
    return attributeBooleanBoolean.get_txhc1s$($receiver_17, 'CausesValidation');
  }

  function set_causesValidation($receiver_17, newValue) {
    attributeBooleanBoolean.set_fid0sb$($receiver_17, 'CausesValidation', newValue);
  }

  function get_validationGroup($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'ValidationGroup');
  }

  function set_validationGroup($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'ValidationGroup', newValue);
  }

  function SelectServerAttributeGroupFacade() {
  }

  SelectServerAttributeGroupFacade.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'SelectServerAttributeGroupFacade',
    interfaces: [Tag]
  };

  function get_dataSourceID($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'DataSourceID');
  }

  function set_dataSourceID($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'DataSourceID', newValue);
  }

  function get_dataTextField($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'DataTextField');
  }

  function set_dataTextField($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'DataTextField', newValue);
  }

  function get_dataValueField($receiver_17) {
    return attributeStringString.get_txhc1s$($receiver_17, 'DataValueField');
  }

  function set_dataValueField($receiver_17, newValue) {
    attributeStringString.set_fid0sb$($receiver_17, 'DataValueField', newValue);
  }

  function CommonAttributeGroupFacadeFlowHeadingContent() {
  }

  CommonAttributeGroupFacadeFlowHeadingContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'CommonAttributeGroupFacadeFlowHeadingContent',
    interfaces: [HtmlBlockTag, HeadingContent, CommonAttributeGroupFacade]
  };

  function CommonAttributeGroupFacadeFlowHeadingPhrasingContent() {
  }

  CommonAttributeGroupFacadeFlowHeadingPhrasingContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'CommonAttributeGroupFacadeFlowHeadingPhrasingContent',
    interfaces: [HtmlBlockInlineTag, HtmlInlineTag, FlowPhrasingContent, CommonAttributeGroupFacadeFlowHeadingContent, HtmlBlockTag, CommonAttributeGroupFacade]
  };

  function CommonAttributeGroupFacadeFlowInteractiveContent() {
  }

  CommonAttributeGroupFacadeFlowInteractiveContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'CommonAttributeGroupFacadeFlowInteractiveContent',
    interfaces: [InteractiveContent, HtmlBlockTag, CommonAttributeGroupFacade]
  };

  function CommonAttributeGroupFacadeFlowInteractivePhrasingContent() {
  }

  CommonAttributeGroupFacadeFlowInteractivePhrasingContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'CommonAttributeGroupFacadeFlowInteractivePhrasingContent',
    interfaces: [HtmlBlockInlineTag, HtmlInlineTag, FlowPhrasingContent, CommonAttributeGroupFacadeFlowInteractiveContent, HtmlBlockTag, CommonAttributeGroupFacade]
  };

  function CommonAttributeGroupFacadeFlowMetaDataContent() {
  }

  CommonAttributeGroupFacadeFlowMetaDataContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'CommonAttributeGroupFacadeFlowMetaDataContent',
    interfaces: [HtmlHeadTag, HtmlBlockTag, FlowMetaDataContent, CommonAttributeGroupFacade]
  };

  function CommonAttributeGroupFacadeFlowMetaDataPhrasingContent() {
  }

  CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'CommonAttributeGroupFacadeFlowMetaDataPhrasingContent',
    interfaces: [HtmlBlockInlineTag, HtmlInlineTag, FlowMetaDataPhrasingContent, FlowPhrasingContent, CommonAttributeGroupFacadeFlowMetaDataContent, HtmlHeadTag, HtmlBlockTag, FlowMetaDataContent, CommonAttributeGroupFacade]
  };

  function HtmlBlockInlineTag() {
  }

  HtmlBlockInlineTag.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'HtmlBlockInlineTag',
    interfaces: [HtmlInlineTag, HtmlBlockTag, FlowPhrasingContent, CommonAttributeGroupFacade]
  };

  function CommonAttributeGroupFacadeFlowSectioningContent() {
  }

  CommonAttributeGroupFacadeFlowSectioningContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'CommonAttributeGroupFacadeFlowSectioningContent',
    interfaces: [SectioningContent, HtmlBlockTag, CommonAttributeGroupFacade]
  };

  function FlowMetaDataContent() {
  }

  FlowMetaDataContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'FlowMetaDataContent',
    interfaces: [MetaDataContent, FlowContent]
  };

  function FlowMetaDataPhrasingContent() {
  }

  FlowMetaDataPhrasingContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'FlowMetaDataPhrasingContent',
    interfaces: [FlowPhrasingContent, FlowMetaDataContent]
  };

  function FlowPhrasingContent() {
  }

  FlowPhrasingContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'FlowPhrasingContent',
    interfaces: [PhrasingContent, FlowContent]
  };

  function HtmlBlockTag() {
  }

  HtmlBlockTag.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'HtmlBlockTag',
    interfaces: [FlowContent, CommonAttributeGroupFacade]
  };

  function HtmlHeadTag() {
  }

  HtmlHeadTag.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'HtmlHeadTag',
    interfaces: [MetaDataContent, CommonAttributeGroupFacade]
  };

  function HtmlInlineTag() {
  }

  HtmlInlineTag.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'HtmlInlineTag',
    interfaces: [PhrasingContent, CommonAttributeGroupFacade]
  };
  var attributeStringString;
  var attributeSetStringStringSet;
  var attributeBooleanBoolean;
  var attributeBooleanBooleanOnOff;
  var attributeBooleanTicker;
  var attributeButtonFormEncTypeEnumButtonFormEncTypeValues;
  var attributeButtonFormMethodEnumButtonFormMethodValues;
  var attributeButtonTypeEnumButtonTypeValues;
  var attributeCommandTypeEnumCommandTypeValues;
  var attributeDirEnumDirValues;
  var attributeDraggableEnumDraggableValues;
  var attributeFormEncTypeEnumFormEncTypeValues;
  var attributeFormMethodEnumFormMethodValues;
  var attributeIframeSandboxEnumIframeSandboxValues;
  var attributeInputFormEncTypeEnumInputFormEncTypeValues;
  var attributeInputFormMethodEnumInputFormMethodValues;
  var attributeInputTypeEnumInputTypeValues;
  var attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues;
  var attributeRunAtEnumRunAtValues;
  var attributeScriptTypeEnumScriptTypeValues;
  var attributeTextAreaWrapEnumTextAreaWrapValues;
  var attributeThScopeEnumThScopeValues;

  function SAMP(initialAttributes, consumer) {
    HTMLTag.call(this, 'samp', consumer, initialAttributes, null, true, false);
    this.consumer_2rgbdp$_0 = consumer;
  }

  Object.defineProperty(SAMP.prototype, 'consumer', {
    get: function() {
      return this.consumer_2rgbdp$_0;
    }
  });
  SAMP.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SAMP',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_23($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_22($receiver_17) {
    return $receiver_17;
  }

  function SCRIPT(initialAttributes, consumer) {
    HTMLTag.call(this, 'script', consumer, initialAttributes, null, false, false);
    this.consumer_rq40oz$_0 = consumer;
  }

  Object.defineProperty(SCRIPT.prototype, 'consumer', {
    get: function() {
      return this.consumer_rq40oz$_0;
    }
  });
  Object.defineProperty(SCRIPT.prototype, 'charset', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'charset');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'charset', newValue);
    }
  });
  Object.defineProperty(SCRIPT.prototype, 'type', {
    get: function() {
      return attributeScriptTypeEnumScriptTypeValues.get_txhc1s$(this, 'type');
    },
    set: function(newValue) {
      attributeScriptTypeEnumScriptTypeValues.set_fid0sb$(this, 'type', newValue);
    }
  });
  Object.defineProperty(SCRIPT.prototype, 'src', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'src');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'src', newValue);
    }
  });
  Object.defineProperty(SCRIPT.prototype, 'defer', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'defer');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'defer', newValue);
    }
  });
  Object.defineProperty(SCRIPT.prototype, 'async', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'async');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'async', newValue);
    }
  });
  SCRIPT.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SCRIPT',
    interfaces: [FlowMetaDataPhrasingContent, HTMLTag]
  };

  function get_asFlowContent_24($receiver_17) {
    return $receiver_17;
  }

  function get_asMetaDataContent_1($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_23($receiver_17) {
    return $receiver_17;
  }

  function SECTION(initialAttributes, consumer) {
    HTMLTag.call(this, 'section', consumer, initialAttributes, null, false, false);
    this.consumer_tj5crl$_0 = consumer;
  }

  Object.defineProperty(SECTION.prototype, 'consumer', {
    get: function() {
      return this.consumer_tj5crl$_0;
    }
  });
  SECTION.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SECTION',
    interfaces: [CommonAttributeGroupFacadeFlowSectioningContent, HTMLTag]
  };

  function get_asFlowContent_25($receiver_17) {
    return $receiver_17;
  }

  function get_asSectioningContent_0($receiver_17) {
    return $receiver_17;
  }

  function SELECT(initialAttributes, consumer) {
    HTMLTag.call(this, 'select', consumer, initialAttributes, null, true, false);
    this.consumer_sktoc2$_0 = consumer;
  }

  Object.defineProperty(SELECT.prototype, 'consumer', {
    get: function() {
      return this.consumer_sktoc2$_0;
    }
  });
  Object.defineProperty(SELECT.prototype, 'autoFocus', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'autofocus');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autofocus', newValue);
    }
  });
  Object.defineProperty(SELECT.prototype, 'disabled', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(SELECT.prototype, 'form', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(SELECT.prototype, 'multiple', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'multiple');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'multiple', newValue);
    }
  });
  Object.defineProperty(SELECT.prototype, 'name', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  Object.defineProperty(SELECT.prototype, 'size', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'size');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'size', newValue);
    }
  });
  Object.defineProperty(SELECT.prototype, 'required', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'required');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'required', newValue);
    }
  });
  SELECT.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SELECT',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };

  function option$lambda_3($receiver_17) {
  }

  function option_3($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = option$lambda_3;
    visit(new OPTION(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function option$lambda_4(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function option_4($receiver_17, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    visit(new OPTION(attributesMapOf_0('class', classes), $receiver_17.consumer), option$lambda_4(content));
  }

  function optGroup$lambda_0($receiver_17) {
  }

  function optGroup_0($receiver_17, label_2, classes, block) {
    if (label_2 === void 0)
      label_2 = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = optGroup$lambda_0;
    visit(new OPTGROUP(attributesMapOf(['label', label_2, 'class', classes]), $receiver_17.consumer), block);
  }

  function get_asFlowContent_26($receiver_17) {
    return $receiver_17;
  }

  function get_asInteractiveContent_6($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_24($receiver_17) {
    return $receiver_17;
  }

  function SMALL(initialAttributes, consumer) {
    HTMLTag.call(this, 'small', consumer, initialAttributes, null, true, false);
    this.consumer_esbjlr$_0 = consumer;
  }

  Object.defineProperty(SMALL.prototype, 'consumer', {
    get: function() {
      return this.consumer_esbjlr$_0;
    }
  });
  SMALL.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SMALL',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_27($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_25($receiver_17) {
    return $receiver_17;
  }

  function SOURCE(initialAttributes, consumer) {
    HTMLTag.call(this, 'source', consumer, initialAttributes, null, true, true);
    this.consumer_xggc37$_0 = consumer;
  }

  Object.defineProperty(SOURCE.prototype, 'consumer', {
    get: function() {
      return this.consumer_xggc37$_0;
    }
  });
  Object.defineProperty(SOURCE.prototype, 'src', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'src');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'src', newValue);
    }
  });
  Object.defineProperty(SOURCE.prototype, 'type', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'type');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'type', newValue);
    }
  });
  Object.defineProperty(SOURCE.prototype, 'media', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'media');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'media', newValue);
    }
  });
  SOURCE.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SOURCE',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };

  function SPAN(initialAttributes, consumer) {
    HTMLTag.call(this, 'span', consumer, initialAttributes, null, true, false);
    this.consumer_2rpn8k$_0 = consumer;
  }

  Object.defineProperty(SPAN.prototype, 'consumer', {
    get: function() {
      return this.consumer_2rpn8k$_0;
    }
  });
  SPAN.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SPAN',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_28($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_26($receiver_17) {
    return $receiver_17;
  }

  function STRONG(initialAttributes, consumer) {
    HTMLTag.call(this, 'strong', consumer, initialAttributes, null, true, false);
    this.consumer_z94og9$_0 = consumer;
  }

  Object.defineProperty(STRONG.prototype, 'consumer', {
    get: function() {
      return this.consumer_z94og9$_0;
    }
  });
  STRONG.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'STRONG',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_29($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_27($receiver_17) {
    return $receiver_17;
  }

  function STYLE(initialAttributes, consumer) {
    HTMLTag.call(this, 'style', consumer, initialAttributes, null, false, false);
    this.consumer_ewlf9x$_0 = consumer;
  }

  Object.defineProperty(STYLE.prototype, 'consumer', {
    get: function() {
      return this.consumer_ewlf9x$_0;
    }
  });
  Object.defineProperty(STYLE.prototype, 'type', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'type');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'type', newValue);
    }
  });
  Object.defineProperty(STYLE.prototype, 'media', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'media');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'media', newValue);
    }
  });
  Object.defineProperty(STYLE.prototype, 'scoped', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'scoped');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'scoped', newValue);
    }
  });
  STYLE.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'STYLE',
    interfaces: [CommonAttributeGroupFacadeFlowMetaDataContent, HTMLTag]
  };

  function get_asFlowContent_30($receiver_17) {
    return $receiver_17;
  }

  function get_asMetaDataContent_2($receiver_17) {
    return $receiver_17;
  }

  function SUB(initialAttributes, consumer) {
    HTMLTag.call(this, 'sub', consumer, initialAttributes, null, true, false);
    this.consumer_6s8r2y$_0 = consumer;
  }

  Object.defineProperty(SUB.prototype, 'consumer', {
    get: function() {
      return this.consumer_6s8r2y$_0;
    }
  });
  SUB.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SUB',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_31($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_28($receiver_17) {
    return $receiver_17;
  }

  function SUP(initialAttributes, consumer) {
    HTMLTag.call(this, 'sup', consumer, initialAttributes, null, true, false);
    this.consumer_6s8qqw$_0 = consumer;
  }

  Object.defineProperty(SUP.prototype, 'consumer', {
    get: function() {
      return this.consumer_6s8qqw$_0;
    }
  });
  SUP.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SUP',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_32($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_29($receiver_17) {
    return $receiver_17;
  }

  function SVG(initialAttributes, consumer) {
    HTMLTag.call(this, 'svg', consumer, initialAttributes, 'http://www.w3.org/2000/svg', false, false);
    this.consumer_6s8q7y$_0 = consumer;
  }

  Object.defineProperty(SVG.prototype, 'consumer', {
    get: function() {
      return this.consumer_6s8q7y$_0;
    }
  });
  SVG.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SVG',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_33($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_30($receiver_17) {
    return $receiver_17;
  }

  function a$lambda_0($receiver_17) {
  }

  function a_0($receiver_17, href, target, classes, block) {
    if (href === void 0)
      href = null;
    if (target === void 0)
      target = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = a$lambda_0;
    return visitAndFinalize(new A(attributesMapOf(['href', href, 'target', target, 'class', classes]), $receiver_17), $receiver_17, block);
  }

  function abbr$lambda_0($receiver_17) {
  }

  function abbr_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = abbr$lambda_0;
    return visitAndFinalize(new ABBR(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function address$lambda_1($receiver_17) {
  }

  function address_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = address$lambda_1;
    return visitAndFinalize(new ADDRESS(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function area$lambda_0($receiver_17) {
  }

  function area_0($receiver_17, shape, alt, classes, block) {
    if (shape === void 0)
      shape = null;
    if (alt === void 0)
      alt = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = area$lambda_0;
    return visitAndFinalize(new AREA(attributesMapOf(['Shape', shape != null ? enumEncode(shape) : null, 'alt', alt, 'class', classes]), $receiver_17), $receiver_17, block);
  }

  function article$lambda_0($receiver_17) {
  }

  function article_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = article$lambda_0;
    return visitAndFinalize(new ARTICLE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function aside$lambda_0($receiver_17) {
  }

  function aside_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = aside$lambda_0;
    return visitAndFinalize(new ASIDE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function audio$lambda_0($receiver_17) {
  }

  function audio_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = audio$lambda_0;
    return visitAndFinalize(new AUDIO(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function b$lambda_0($receiver_17) {
  }

  function b_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = b$lambda_0;
    return visitAndFinalize(new B(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function base$lambda_1($receiver_17) {
  }

  function base_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = base$lambda_1;
    return visitAndFinalize(new BASE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function bdi$lambda_0($receiver_17) {
  }

  function bdi_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = bdi$lambda_0;
    return visitAndFinalize(new BDI(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function bdo$lambda_0($receiver_17) {
  }

  function bdo_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = bdo$lambda_0;
    return visitAndFinalize(new BDO(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function blockQuote$lambda_1($receiver_17) {
  }

  function blockQuote_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = blockQuote$lambda_1;
    return visitAndFinalize(new BLOCKQUOTE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function body$lambda_0($receiver_17) {
  }

  function body_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = body$lambda_0;
    return visitAndFinalize(new BODY(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function br$lambda_0($receiver_17) {
  }

  function br_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = br$lambda_0;
    return visitAndFinalize(new BR(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function button$lambda_0($receiver_17) {
  }

  function button_0($receiver_17, formEncType, formMethod, type, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (type === void 0)
      type = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = button$lambda_0;
    return visitAndFinalize(new BUTTON(attributesMapOf(['formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver_17), $receiver_17, block);
  }

  function canvas$lambda_1(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function canvas_1($receiver_17, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    return visitAndFinalize(new CANVAS(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, canvas$lambda_1(content));
  }

  function canvas$lambda_2($receiver_17) {
  }

  function canvas_2($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = canvas$lambda_2;
    return visitAndFinalize(new CANVAS(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function caption$lambda_1($receiver_17) {
  }

  function caption_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = caption$lambda_1;
    return visitAndFinalize(new CAPTION(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function cite$lambda_0($receiver_17) {
  }

  function cite_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = cite$lambda_0;
    return visitAndFinalize(new CITE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function code$lambda_0($receiver_17) {
  }

  function code_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = code$lambda_0;
    return visitAndFinalize(new CODE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function col$lambda_0($receiver_17) {
  }

  function col_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = col$lambda_0;
    return visitAndFinalize(new COL(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function colGroup$lambda_1($receiver_17) {
  }

  function colGroup_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = colGroup$lambda_1;
    return visitAndFinalize(new COLGROUP(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function command$lambda_1($receiver_17) {
  }

  function command_1($receiver_17, type, classes, block) {
    if (type === void 0)
      type = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = command$lambda_1;
    return visitAndFinalize(new COMMAND(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver_17), $receiver_17, block);
  }

  function dataList$lambda_0($receiver_17) {
  }

  function dataList_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dataList$lambda_0;
    return visitAndFinalize(new DATALIST(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function dd$lambda_0($receiver_17) {
  }

  function dd_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dd$lambda_0;
    return visitAndFinalize(new DD(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function del$lambda_0($receiver_17) {
  }

  function del_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = del$lambda_0;
    return visitAndFinalize(new DEL(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function details$lambda_0($receiver_17) {
  }

  function details_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = details$lambda_0;
    return visitAndFinalize(new DETAILS(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function dfn$lambda_0($receiver_17) {
  }

  function dfn_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dfn$lambda_0;
    return visitAndFinalize(new DFN(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function dialog$lambda_1($receiver_17) {
  }

  function dialog_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dialog$lambda_1;
    return visitAndFinalize(new DIALOG(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function div$lambda_1($receiver_17) {
  }

  function div_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = div$lambda_1;
    return visitAndFinalize(new DIV(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function dl$lambda_1($receiver_17) {
  }

  function dl_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dl$lambda_1;
    return visitAndFinalize(new DL(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function dt$lambda_0($receiver_17) {
  }

  function dt_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dt$lambda_0;
    return visitAndFinalize(new DT(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function em$lambda_0($receiver_17) {
  }

  function em_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = em$lambda_0;
    return visitAndFinalize(new EM(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function embed$lambda_0($receiver_17) {
  }

  function embed_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = embed$lambda_0;
    return visitAndFinalize(new EMBED(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function fieldSet$lambda_1($receiver_17) {
  }

  function fieldSet_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = fieldSet$lambda_1;
    return visitAndFinalize(new FIELDSET(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function figcaption$lambda_2($receiver_17) {
  }

  function figcaption_2($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = figcaption$lambda_2;
    return visitAndFinalize(new FIGCAPTION(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function figure$lambda_1($receiver_17) {
  }

  function figure_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = figure$lambda_1;
    return visitAndFinalize(new FIGURE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function footer$lambda_1($receiver_17) {
  }

  function footer_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = footer$lambda_1;
    return visitAndFinalize(new FOOTER(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function form$lambda_1($receiver_17) {
  }

  function form_1($receiver_17, action, encType, method, classes, block) {
    if (action === void 0)
      action = null;
    if (encType === void 0)
      encType = null;
    if (method === void 0)
      method = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = form$lambda_1;
    return visitAndFinalize(new FORM(attributesMapOf(['action', action, 'enctype', encType != null ? enumEncode(encType) : null, 'method', method != null ? enumEncode(method) : null, 'class', classes]), $receiver_17), $receiver_17, block);
  }

  function h1$lambda_0($receiver_17) {
  }

  function h1_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h1$lambda_0;
    return visitAndFinalize(new H1(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function h2$lambda_0($receiver_17) {
  }

  function h2_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h2$lambda_0;
    return visitAndFinalize(new H2(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function h3$lambda_0($receiver_17) {
  }

  function h3_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h3$lambda_0;
    return visitAndFinalize(new H3(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function h4$lambda_0($receiver_17) {
  }

  function h4_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h4$lambda_0;
    return visitAndFinalize(new H4(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function h5$lambda_0($receiver_17) {
  }

  function h5_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h5$lambda_0;
    return visitAndFinalize(new H5(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function h6$lambda_0($receiver_17) {
  }

  function h6_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h6$lambda_0;
    return visitAndFinalize(new H6(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function head$lambda_0($receiver_17) {
  }

  function head_0($receiver_17, block) {
    if (block === void 0)
      block = head$lambda_0;
    return visitAndFinalize(new HEAD(emptyMap, $receiver_17), $receiver_17, block);
  }

  function header$lambda_1($receiver_17) {
  }

  function header_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = header$lambda_1;
    return visitAndFinalize(new HEADER(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function hGroup$lambda_0($receiver_17) {
  }

  function hGroup_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = hGroup$lambda_0;
    return visitAndFinalize(new HGROUP(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function hr$lambda_1($receiver_17) {
  }

  function hr_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = hr$lambda_1;
    return visitAndFinalize(new HR(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function html$lambda_0($receiver_17) {
  }

  function html_0($receiver_17, block) {
    if (block === void 0)
      block = html$lambda_0;
    return visitAndFinalize(new HTML(emptyMap, $receiver_17), $receiver_17, block);
  }

  function i$lambda_0($receiver_17) {
  }

  function i_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = i$lambda_0;
    return visitAndFinalize(new I(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function iframe$lambda_1(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function iframe_1($receiver_17, sandbox, classes, content) {
    if (sandbox === void 0)
      sandbox = null;
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    return visitAndFinalize(new IFRAME(attributesMapOf(['sandbox', sandbox != null ? enumEncode(sandbox) : null, 'class', classes]), $receiver_17), $receiver_17, iframe$lambda_1(content));
  }

  function iframe$lambda_2($receiver_17) {
  }

  function iframe_2($receiver_17, sandbox, classes, block) {
    if (sandbox === void 0)
      sandbox = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = iframe$lambda_2;
    return visitAndFinalize(new IFRAME(attributesMapOf(['sandbox', sandbox != null ? enumEncode(sandbox) : null, 'class', classes]), $receiver_17), $receiver_17, block);
  }

  function img$lambda_0($receiver_17) {
  }

  function img_0($receiver_17, alt, src, classes, block) {
    if (alt === void 0)
      alt = null;
    if (src === void 0)
      src = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = img$lambda_0;
    return visitAndFinalize(new IMG(attributesMapOf(['alt', alt, 'src', src, 'class', classes]), $receiver_17), $receiver_17, block);
  }

  function input$lambda_0($receiver_17) {
  }

  function input_0($receiver_17, type, formEncType, formMethod, name, classes, block) {
    if (type === void 0)
      type = null;
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = input$lambda_0;
    return visitAndFinalize(new INPUT(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17), $receiver_17, block);
  }

  function ins$lambda_0($receiver_17) {
  }

  function ins_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = ins$lambda_0;
    return visitAndFinalize(new INS(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function kbd$lambda_0($receiver_17) {
  }

  function kbd_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = kbd$lambda_0;
    return visitAndFinalize(new KBD(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function keyGen$lambda_0($receiver_17) {
  }

  function keyGen_0($receiver_17, keyType, classes, block) {
    if (keyType === void 0)
      keyType = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = keyGen$lambda_0;
    return visitAndFinalize(new KEYGEN(attributesMapOf(['keytype', keyType != null ? enumEncode(keyType) : null, 'class', classes]), $receiver_17), $receiver_17, block);
  }

  function label$lambda_0($receiver_17) {
  }

  function label_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = label$lambda_0;
    return visitAndFinalize(new LABEL(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function legEnd$lambda_2($receiver_17) {
  }

  function legEnd_2($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = legEnd$lambda_2;
    return visitAndFinalize(new LEGEND(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function li$lambda_2($receiver_17) {
  }

  function li_2($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = li$lambda_2;
    return visitAndFinalize(new LI(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function link$lambda_1($receiver_17) {
  }

  function link_1($receiver_17, href, rel, type, block) {
    if (href === void 0)
      href = null;
    if (rel === void 0)
      rel = null;
    if (type === void 0)
      type = null;
    if (block === void 0)
      block = link$lambda_1;
    return visitAndFinalize(new LINK(attributesMapOf(['href', href, 'rel', rel, 'type', type]), $receiver_17), $receiver_17, block);
  }

  function map$lambda_0($receiver_17) {
  }

  function map_1($receiver_17, name, classes, block) {
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = map$lambda_0;
    return visitAndFinalize(new MAP(attributesMapOf(['name', name, 'class', classes]), $receiver_17), $receiver_17, block);
  }

  function mark$lambda_0($receiver_17) {
  }

  function mark_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = mark$lambda_0;
    return visitAndFinalize(new MARK(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function math$lambda_0($receiver_17) {
  }

  function math_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = math$lambda_0;
    return visitAndFinalize(new MATH(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function mathml$lambda_1(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function mathml_1($receiver_17, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    return visitAndFinalize(new MATHML(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, mathml$lambda_1(content));
  }

  function mathml$lambda_2($receiver_17) {
  }

  function mathml_2($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = mathml$lambda_2;
    return visitAndFinalize(new MATHML(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function meta$lambda_1($receiver_17) {
  }

  function meta_1($receiver_17, name, content, block) {
    if (name === void 0)
      name = null;
    if (content === void 0)
      content = null;
    if (block === void 0)
      block = meta$lambda_1;
    return visitAndFinalize(new META(attributesMapOf(['name', name, 'content', content]), $receiver_17), $receiver_17, block);
  }

  function meter$lambda_0($receiver_17) {
  }

  function meter_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = meter$lambda_0;
    return visitAndFinalize(new METER(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function nav$lambda_0($receiver_17) {
  }

  function nav_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = nav$lambda_0;
    return visitAndFinalize(new NAV(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function noScript$lambda_1($receiver_17) {
  }

  function noScript_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = noScript$lambda_1;
    return visitAndFinalize(new NOSCRIPT(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function object_$lambda_0($receiver_17) {
  }

  function object__0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = object_$lambda_0;
    return visitAndFinalize(new OBJECT_(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function ol$lambda_1($receiver_17) {
  }

  function ol_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = ol$lambda_1;
    return visitAndFinalize(new OL(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function optGroup$lambda_1($receiver_17) {
  }

  function optGroup_1($receiver_17, label_2, classes, block) {
    if (label_2 === void 0)
      label_2 = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = optGroup$lambda_1;
    return visitAndFinalize(new OPTGROUP(attributesMapOf(['label', label_2, 'class', classes]), $receiver_17), $receiver_17, block);
  }

  function option$lambda_5(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function option_5($receiver_17, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    return visitAndFinalize(new OPTION(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, option$lambda_5(content));
  }

  function option$lambda_6($receiver_17) {
  }

  function option_6($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = option$lambda_6;
    return visitAndFinalize(new OPTION(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function output$lambda_0($receiver_17) {
  }

  function output_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = output$lambda_0;
    return visitAndFinalize(new OUTPUT(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function p$lambda_1($receiver_17) {
  }

  function p_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = p$lambda_1;
    return visitAndFinalize(new P(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function param$lambda_1($receiver_17) {
  }

  function param_1($receiver_17, name, value, block) {
    if (name === void 0)
      name = null;
    if (value === void 0)
      value = null;
    if (block === void 0)
      block = param$lambda_1;
    return visitAndFinalize(new PARAM(attributesMapOf(['name', name, 'value', value]), $receiver_17), $receiver_17, block);
  }

  function pre$lambda_1($receiver_17) {
  }

  function pre_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = pre$lambda_1;
    return visitAndFinalize(new PRE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function progress$lambda_0($receiver_17) {
  }

  function progress_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = progress$lambda_0;
    return visitAndFinalize(new PROGRESS(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function q$lambda_0($receiver_17) {
  }

  function q_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = q$lambda_0;
    return visitAndFinalize(new Q(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function rp$lambda_1($receiver_17) {
  }

  function rp_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = rp$lambda_1;
    return visitAndFinalize(new RP(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function rt$lambda_1($receiver_17) {
  }

  function rt_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = rt$lambda_1;
    return visitAndFinalize(new RT(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function ruby$lambda_0($receiver_17) {
  }

  function ruby_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = ruby$lambda_0;
    return visitAndFinalize(new RUBY(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function samp$lambda_0($receiver_17) {
  }

  function samp_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = samp$lambda_0;
    return visitAndFinalize(new SAMP(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function script$lambda_1(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function script_1($receiver_17, type, src, content) {
    if (type === void 0)
      type = null;
    if (src === void 0)
      src = null;
    if (content === void 0)
      content = '';
    return visitAndFinalize(new SCRIPT(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'src', src]), $receiver_17), $receiver_17, script$lambda_1(content));
  }

  function script$lambda_2($receiver_17) {
  }

  function script_2($receiver_17, type, src, block) {
    if (type === void 0)
      type = null;
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = script$lambda_2;
    return visitAndFinalize(new SCRIPT(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'src', src]), $receiver_17), $receiver_17, block);
  }

  function section$lambda_0($receiver_17) {
  }

  function section_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = section$lambda_0;
    return visitAndFinalize(new SECTION(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function select$lambda_0($receiver_17) {
  }

  function select_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = select$lambda_0;
    return visitAndFinalize(new SELECT(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function small$lambda_0($receiver_17) {
  }

  function small_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = small$lambda_0;
    return visitAndFinalize(new SMALL(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function source$lambda_1($receiver_17) {
  }

  function source_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = source$lambda_1;
    return visitAndFinalize(new SOURCE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function span$lambda_0($receiver_17) {
  }

  function span_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = span$lambda_0;
    return visitAndFinalize(new SPAN(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function strong$lambda_0($receiver_17) {
  }

  function strong_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = strong$lambda_0;
    return visitAndFinalize(new STRONG(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function style$lambda_3(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function style_3($receiver_17, type, content) {
    if (type === void 0)
      type = null;
    if (content === void 0)
      content = '';
    return visitAndFinalize(new STYLE(attributesMapOf_0('type', type), $receiver_17), $receiver_17, style$lambda_3(content));
  }

  function style$lambda_4($receiver_17) {
  }

  function style_4($receiver_17, type, block) {
    if (type === void 0)
      type = null;
    if (block === void 0)
      block = style$lambda_4;
    return visitAndFinalize(new STYLE(attributesMapOf_0('type', type), $receiver_17), $receiver_17, block);
  }

  function sub$lambda_0($receiver_17) {
  }

  function sub_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = sub$lambda_0;
    return visitAndFinalize(new SUB(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function sup$lambda_0($receiver_17) {
  }

  function sup_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = sup$lambda_0;
    return visitAndFinalize(new SUP(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function svg$lambda_1(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function svg_1($receiver_17, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    return visitAndFinalize(new SVG(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, svg$lambda_1(content));
  }

  function svg$lambda_2($receiver_17) {
  }

  function svg_2($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = svg$lambda_2;
    return visitAndFinalize(new SVG(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function table$lambda_1($receiver_17) {
  }

  function table_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = table$lambda_1;
    return visitAndFinalize(new TABLE(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function tbody$lambda_1($receiver_17) {
  }

  function tbody_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = tbody$lambda_1;
    return visitAndFinalize(new TBODY(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function td$lambda_1($receiver_17) {
  }

  function td_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = td$lambda_1;
    return visitAndFinalize(new TD(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function textArea$lambda_1(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function textArea_1($receiver_17, rows, cols, wrap, classes, content) {
    if (rows === void 0)
      rows = null;
    if (cols === void 0)
      cols = null;
    if (wrap === void 0)
      wrap = null;
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    return visitAndFinalize(new TEXTAREA(attributesMapOf(['rows', rows, 'cols', cols, 'wrap', wrap != null ? enumEncode(wrap) : null, 'class', classes]), $receiver_17), $receiver_17, textArea$lambda_1(content));
  }

  function textArea$lambda_2($receiver_17) {
  }

  function textArea_2($receiver_17, rows, cols, wrap, classes, block) {
    if (rows === void 0)
      rows = null;
    if (cols === void 0)
      cols = null;
    if (wrap === void 0)
      wrap = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = textArea$lambda_2;
    return visitAndFinalize(new TEXTAREA(attributesMapOf(['rows', rows, 'cols', cols, 'wrap', wrap != null ? enumEncode(wrap) : null, 'class', classes]), $receiver_17), $receiver_17, block);
  }

  function tfoot$lambda_1($receiver_17) {
  }

  function tfoot_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = tfoot$lambda_1;
    return visitAndFinalize(new TFOOT(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function th$lambda_1($receiver_17) {
  }

  function th_1($receiver_17, scope, classes, block) {
    if (scope === void 0)
      scope = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = th$lambda_1;
    return visitAndFinalize(new TH(attributesMapOf(['scope', scope != null ? enumEncode(scope) : null, 'class', classes]), $receiver_17), $receiver_17, block);
  }

  function thead$lambda_1($receiver_17) {
  }

  function thead_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = thead$lambda_1;
    return visitAndFinalize(new THEAD(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function time$lambda_0($receiver_17) {
  }

  function time_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = time$lambda_0;
    return visitAndFinalize(new TIME(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function title$lambda_3(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function title_3($receiver_17, content) {
    if (content === void 0)
      content = '';
    return visitAndFinalize(new TITLE(emptyMap, $receiver_17), $receiver_17, title$lambda_3(content));
  }

  function title$lambda_4($receiver_17) {
  }

  function title_4($receiver_17, block) {
    if (block === void 0)
      block = title$lambda_4;
    return visitAndFinalize(new TITLE(emptyMap, $receiver_17), $receiver_17, block);
  }

  function tr$lambda_4($receiver_17) {
  }

  function tr_4($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = tr$lambda_4;
    return visitAndFinalize(new TR(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function ul$lambda_1($receiver_17) {
  }

  function ul_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = ul$lambda_1;
    return visitAndFinalize(new UL(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function var_$lambda_0($receiver_17) {
  }

  function var__0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = var_$lambda_0;
    return visitAndFinalize(new VAR_(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function video$lambda_0($receiver_17) {
  }

  function video_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = video$lambda_0;
    return visitAndFinalize(new VIDEO(attributesMapOf_0('class', classes), $receiver_17), $receiver_17, block);
  }

  function DATALIST(initialAttributes, consumer) {
    HTMLTag.call(this, 'datalist', consumer, initialAttributes, null, true, false);
    this.consumer_2i51lm$_0 = consumer;
  }

  Object.defineProperty(DATALIST.prototype, 'consumer', {
    get: function() {
      return this.consumer_2i51lm$_0;
    }
  });
  DATALIST.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DATALIST',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function option$lambda_7($receiver_17) {
  }

  function option_7($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = option$lambda_7;
    visit(new OPTION(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function option$lambda_8(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function option_8($receiver_17, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    visit(new OPTION(attributesMapOf_0('class', classes), $receiver_17.consumer), option$lambda_8(content));
  }

  function get_asFlowContent_34($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_31($receiver_17) {
    return $receiver_17;
  }

  function DD(initialAttributes, consumer) {
    HTMLTag.call(this, 'dd', consumer, initialAttributes, null, false, false);
    this.consumer_tkg6zy$_0 = consumer;
  }

  Object.defineProperty(DD.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkg6zy$_0;
    }
  });
  DD.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DD',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function DEL(initialAttributes, consumer) {
    HTMLTag.call(this, 'del', consumer, initialAttributes, null, false, false);
    this.consumer_6sinid$_0 = consumer;
  }

  Object.defineProperty(DEL.prototype, 'consumer', {
    get: function() {
      return this.consumer_6sinid$_0;
    }
  });
  Object.defineProperty(DEL.prototype, 'cite', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'cite');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'cite', newValue);
    }
  });
  Object.defineProperty(DEL.prototype, 'dateTime', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'datetime');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'datetime', newValue);
    }
  });
  DEL.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DEL',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_35($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_32($receiver_17) {
    return $receiver_17;
  }

  function DETAILS(initialAttributes, consumer) {
    HTMLTag.call(this, 'details', consumer, initialAttributes, null, false, false);
    this.consumer_v4s010$_0 = consumer;
  }

  Object.defineProperty(DETAILS.prototype, 'consumer', {
    get: function() {
      return this.consumer_v4s010$_0;
    }
  });
  Object.defineProperty(DETAILS.prototype, 'open', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'open');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'open', newValue);
    }
  });
  DETAILS.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DETAILS',
    interfaces: [CommonAttributeGroupFacadeFlowInteractiveContent, HTMLTag]
  };

  function legEnd$lambda_3($receiver_17) {
  }

  function legEnd_3($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = legEnd$lambda_3;
    visit(new LEGEND(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function get_asFlowContent_36($receiver_17) {
    return $receiver_17;
  }

  function get_asInteractiveContent_7($receiver_17) {
    return $receiver_17;
  }

  function DFN(initialAttributes, consumer) {
    HTMLTag.call(this, 'dfn', consumer, initialAttributes, null, true, false);
    this.consumer_6simpy$_0 = consumer;
  }

  Object.defineProperty(DFN.prototype, 'consumer', {
    get: function() {
      return this.consumer_6simpy$_0;
    }
  });
  DFN.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DFN',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_37($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_33($receiver_17) {
    return $receiver_17;
  }

  function DIALOG(initialAttributes, consumer) {
    HTMLTag.call(this, 'dialog', consumer, initialAttributes, null, false, false);
    this.consumer_n8h1gm$_0 = consumer;
  }

  Object.defineProperty(DIALOG.prototype, 'consumer', {
    get: function() {
      return this.consumer_n8h1gm$_0;
    }
  });
  DIALOG.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DIALOG',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function DIV(initialAttributes, consumer) {
    HTMLTag.call(this, 'div', consumer, initialAttributes, null, false, false);
    this.consumer_6sikaz$_0 = consumer;
  }

  Object.defineProperty(DIV.prototype, 'consumer', {
    get: function() {
      return this.consumer_6sikaz$_0;
    }
  });
  DIV.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DIV',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function DL(initialAttributes, consumer) {
    HTMLTag.call(this, 'dl', consumer, initialAttributes, null, false, false);
    this.consumer_tkg76u$_0 = consumer;
  }

  Object.defineProperty(DL.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkg76u$_0;
    }
  });
  DL.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DL',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function dd$lambda_1($receiver_17) {
  }

  function dd_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dd$lambda_1;
    visit(new DD(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function dt$lambda_1($receiver_17) {
  }

  function dt_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dt$lambda_1;
    visit(new DT(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function DT(initialAttributes, consumer) {
    HTMLTag.call(this, 'dt', consumer, initialAttributes, null, false, false);
    this.consumer_tkg7dq$_0 = consumer;
  }

  Object.defineProperty(DT.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkg7dq$_0;
    }
  });
  DT.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DT',
    interfaces: [HtmlInlineTag, HTMLTag]
  };

  function LABEL(initialAttributes, consumer) {
    HTMLTag.call(this, 'label', consumer, initialAttributes, null, true, false);
    this.consumer_baf5iq$_0 = consumer;
  }

  Object.defineProperty(LABEL.prototype, 'consumer', {
    get: function() {
      return this.consumer_baf5iq$_0;
    }
  });
  Object.defineProperty(LABEL.prototype, 'form', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(LABEL.prototype, 'for_', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'for');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'for', newValue);
    }
  });
  LABEL.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LABEL',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };

  function get_asFlowContent_38($receiver_17) {
    return $receiver_17;
  }

  function get_asInteractiveContent_8($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_34($receiver_17) {
    return $receiver_17;
  }

  function LEGEND(initialAttributes, consumer) {
    HTMLTag.call(this, 'legend', consumer, initialAttributes, null, true, false);
    this.consumer_37l0fz$_0 = consumer;
  }

  Object.defineProperty(LEGEND.prototype, 'consumer', {
    get: function() {
      return this.consumer_37l0fz$_0;
    }
  });
  LEGEND.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LEGEND',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_39($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_35($receiver_17) {
    return $receiver_17;
  }

  function LI(initialAttributes, consumer) {
    HTMLTag.call(this, 'li', consumer, initialAttributes, null, false, false);
    this.consumer_tkgd1t$_0 = consumer;
  }

  Object.defineProperty(LI.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkgd1t$_0;
    }
  });
  Object.defineProperty(LI.prototype, 'value', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'value');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'value', newValue);
    }
  });
  LI.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LI',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function LINK(initialAttributes, consumer) {
    HTMLTag.call(this, 'link', consumer, initialAttributes, null, false, true);
    this.consumer_2nqvqs$_0 = consumer;
  }

  Object.defineProperty(LINK.prototype, 'consumer', {
    get: function() {
      return this.consumer_2nqvqs$_0;
    }
  });
  Object.defineProperty(LINK.prototype, 'href', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'href');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'href', newValue);
    }
  });
  Object.defineProperty(LINK.prototype, 'rel', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'rel');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'rel', newValue);
    }
  });
  Object.defineProperty(LINK.prototype, 'media', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'media');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'media', newValue);
    }
  });
  Object.defineProperty(LINK.prototype, 'type', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'type');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'type', newValue);
    }
  });
  Object.defineProperty(LINK.prototype, 'sizes', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'sizes');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'sizes', newValue);
    }
  });
  LINK.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LINK',
    interfaces: [CommonAttributeGroupFacadeFlowMetaDataPhrasingContent, HTMLTag]
  };

  function get_asFlowContent_40($receiver_17) {
    return $receiver_17;
  }

  function get_asMetaDataContent_3($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_36($receiver_17) {
    return $receiver_17;
  }

  function Q(initialAttributes, consumer) {
    HTMLTag.call(this, 'q', consumer, initialAttributes, null, true, false);
    this.consumer_lkq3f9$_0 = consumer;
  }

  Object.defineProperty(Q.prototype, 'consumer', {
    get: function() {
      return this.consumer_lkq3f9$_0;
    }
  });
  Object.defineProperty(Q.prototype, 'cite', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'cite');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'cite', newValue);
    }
  });
  Q.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Q',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_41($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_37($receiver_17) {
    return $receiver_17;
  }

  function B(initialAttributes, consumer) {
    HTMLTag.call(this, 'b', consumer, initialAttributes, null, true, false);
    this.consumer_lkq32c$_0 = consumer;
  }

  Object.defineProperty(B.prototype, 'consumer', {
    get: function() {
      return this.consumer_lkq32c$_0;
    }
  });
  B.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'B',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_42($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_38($receiver_17) {
    return $receiver_17;
  }

  function BASE(initialAttributes, consumer) {
    HTMLTag.call(this, 'base', consumer, initialAttributes, null, true, true);
    this.consumer_2i3xh9$_0 = consumer;
  }

  Object.defineProperty(BASE.prototype, 'consumer', {
    get: function() {
      return this.consumer_2i3xh9$_0;
    }
  });
  Object.defineProperty(BASE.prototype, 'href', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'href');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'href', newValue);
    }
  });
  Object.defineProperty(BASE.prototype, 'target', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'target');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'target', newValue);
    }
  });
  BASE.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BASE',
    interfaces: [HtmlHeadTag, HTMLTag]
  };

  function BDI(initialAttributes, consumer) {
    HTMLTag.call(this, 'bdi', consumer, initialAttributes, null, true, false);
    this.consumer_6sjyap$_0 = consumer;
  }

  Object.defineProperty(BDI.prototype, 'consumer', {
    get: function() {
      return this.consumer_6sjyap$_0;
    }
  });
  BDI.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BDI',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_43($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_39($receiver_17) {
    return $receiver_17;
  }

  function BDO(initialAttributes, consumer) {
    HTMLTag.call(this, 'bdo', consumer, initialAttributes, null, true, false);
    this.consumer_6sjy5j$_0 = consumer;
  }

  Object.defineProperty(BDO.prototype, 'consumer', {
    get: function() {
      return this.consumer_6sjy5j$_0;
    }
  });
  BDO.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BDO',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_44($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_40($receiver_17) {
    return $receiver_17;
  }

  function BLOCKQUOTE(initialAttributes, consumer) {
    HTMLTag.call(this, 'blockquote', consumer, initialAttributes, null, false, false);
    this.consumer_fncvy7$_0 = consumer;
  }

  Object.defineProperty(BLOCKQUOTE.prototype, 'consumer', {
    get: function() {
      return this.consumer_fncvy7$_0;
    }
  });
  Object.defineProperty(BLOCKQUOTE.prototype, 'cite', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'cite');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'cite', newValue);
    }
  });
  BLOCKQUOTE.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BLOCKQUOTE',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function BODY(initialAttributes, consumer) {
    HTMLTag.call(this, 'body', consumer, initialAttributes, null, false, false);
    this.consumer_2ickng$_0 = consumer;
  }

  Object.defineProperty(BODY.prototype, 'consumer', {
    get: function() {
      return this.consumer_2ickng$_0;
    }
  });
  Object.defineProperty(BODY.prototype, 'onAfterprint', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'onafterprint');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'onafterprint', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onBeforeprint', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'onbeforeprint');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'onbeforeprint', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onBeforeunLoad', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'onbeforeunload');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'onbeforeunload', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onHashChange', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'onhashchange');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'onhashchange', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onMessage', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'onmessage');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'onmessage', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onOffline', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'onoffline');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'onoffline', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onOnline', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'ononline');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'ononline', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onPopstate', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'onpopstate');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'onpopstate', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onRedo', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'onredo');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'onredo', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onResize', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'onresize');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'onresize', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onStorage', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'onstorage');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'onstorage', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onUndo', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'onundo');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'onundo', newValue);
    }
  });
  Object.defineProperty(BODY.prototype, 'onUnLoad', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'onunload');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'onunload', newValue);
    }
  });
  BODY.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BODY',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function BR(initialAttributes, consumer) {
    HTMLTag.call(this, 'br', consumer, initialAttributes, null, true, true);
    this.consumer_tkg5um$_0 = consumer;
  }

  Object.defineProperty(BR.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkg5um$_0;
    }
  });
  BR.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BR',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_45($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_41($receiver_17) {
    return $receiver_17;
  }

  function BUTTON(initialAttributes, consumer) {
    HTMLTag.call(this, 'button', consumer, initialAttributes, null, true, false);
    this.consumer_56ux0$_0 = consumer;
  }

  Object.defineProperty(BUTTON.prototype, 'consumer', {
    get: function() {
      return this.consumer_56ux0$_0;
    }
  });
  Object.defineProperty(BUTTON.prototype, 'autoFocus', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'autofocus');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autofocus', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'disabled', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'form', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'form');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'form', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'formAction', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'formaction');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'formaction', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'formEncType', {
    get: function() {
      return attributeButtonFormEncTypeEnumButtonFormEncTypeValues.get_txhc1s$(this, 'formenctype');
    },
    set: function(newValue) {
      attributeButtonFormEncTypeEnumButtonFormEncTypeValues.set_fid0sb$(this, 'formenctype', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'formMethod', {
    get: function() {
      return attributeButtonFormMethodEnumButtonFormMethodValues.get_txhc1s$(this, 'formmethod');
    },
    set: function(newValue) {
      attributeButtonFormMethodEnumButtonFormMethodValues.set_fid0sb$(this, 'formmethod', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'formNovalidate', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'formnovalidate');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'formnovalidate', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'formTarget', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'formtarget');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'formtarget', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'name', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'name');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'name', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'value', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'value');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'value', newValue);
    }
  });
  Object.defineProperty(BUTTON.prototype, 'type', {
    get: function() {
      return attributeButtonTypeEnumButtonTypeValues.get_txhc1s$(this, 'type');
    },
    set: function(newValue) {
      attributeButtonTypeEnumButtonTypeValues.set_fid0sb$(this, 'type', newValue);
    }
  });
  BUTTON.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BUTTON',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };

  function get_asFlowContent_46($receiver_17) {
    return $receiver_17;
  }

  function get_asInteractiveContent_9($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_42($receiver_17) {
    return $receiver_17;
  }

  function A(initialAttributes, consumer) {
    HTMLTag.call(this, 'a', consumer, initialAttributes, null, true, false);
    this.consumer_lkq31h$_0 = consumer;
  }

  Object.defineProperty(A.prototype, 'consumer', {
    get: function() {
      return this.consumer_lkq31h$_0;
    }
  });
  Object.defineProperty(A.prototype, 'href', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'href');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'href', newValue);
    }
  });
  Object.defineProperty(A.prototype, 'target', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'target');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'target', newValue);
    }
  });
  Object.defineProperty(A.prototype, 'ping', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'ping');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'ping', newValue);
    }
  });
  Object.defineProperty(A.prototype, 'rel', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'rel');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'rel', newValue);
    }
  });
  Object.defineProperty(A.prototype, 'type', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'type');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'type', newValue);
    }
  });
  A.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'A',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };

  function get_asFlowContent_47($receiver_17) {
    return $receiver_17;
  }

  function get_asInteractiveContent_10($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_43($receiver_17) {
    return $receiver_17;
  }

  function ABBR(initialAttributes, consumer) {
    HTMLTag.call(this, 'abbr', consumer, initialAttributes, null, true, false);
    this.consumer_2hkfkt$_0 = consumer;
  }

  Object.defineProperty(ABBR.prototype, 'consumer', {
    get: function() {
      return this.consumer_2hkfkt$_0;
    }
  });
  ABBR.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ABBR',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_48($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_44($receiver_17) {
    return $receiver_17;
  }

  function ADDRESS(initialAttributes, consumer) {
    HTMLTag.call(this, 'address', consumer, initialAttributes, null, false, false);
    this.consumer_6atidq$_0 = consumer;
  }

  Object.defineProperty(ADDRESS.prototype, 'consumer', {
    get: function() {
      return this.consumer_6atidq$_0;
    }
  });
  ADDRESS.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ADDRESS',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function AREA(initialAttributes, consumer) {
    HTMLTag.call(this, 'area', consumer, initialAttributes, null, true, true);
    this.consumer_2hup6p$_0 = consumer;
  }

  Object.defineProperty(AREA.prototype, 'consumer', {
    get: function() {
      return this.consumer_2hup6p$_0;
    }
  });
  Object.defineProperty(AREA.prototype, 'coords', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'coords');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'coords', newValue);
    }
  });
  Object.defineProperty(AREA.prototype, 'href', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'href');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'href', newValue);
    }
  });
  Object.defineProperty(AREA.prototype, 'alt', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'alt');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'alt', newValue);
    }
  });
  Object.defineProperty(AREA.prototype, 'target', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'target');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'target', newValue);
    }
  });
  Object.defineProperty(AREA.prototype, 'media', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'media');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'media', newValue);
    }
  });
  Object.defineProperty(AREA.prototype, 'rel', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'rel');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'rel', newValue);
    }
  });
  Object.defineProperty(AREA.prototype, 'ping', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'ping');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'ping', newValue);
    }
  });
  Object.defineProperty(AREA.prototype, 'type', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'type');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'type', newValue);
    }
  });
  AREA.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AREA',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_49($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_45($receiver_17) {
    return $receiver_17;
  }

  function ARTICLE(initialAttributes, consumer) {
    HTMLTag.call(this, 'article', consumer, initialAttributes, null, false, false);
    this.consumer_6gvbps$_0 = consumer;
  }

  Object.defineProperty(ARTICLE.prototype, 'consumer', {
    get: function() {
      return this.consumer_6gvbps$_0;
    }
  });
  ARTICLE.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ARTICLE',
    interfaces: [CommonAttributeGroupFacadeFlowSectioningContent, HTMLTag]
  };

  function get_asFlowContent_50($receiver_17) {
    return $receiver_17;
  }

  function get_asSectioningContent_1($receiver_17) {
    return $receiver_17;
  }

  function ASIDE(initialAttributes, consumer) {
    HTMLTag.call(this, 'aside', consumer, initialAttributes, null, false, false);
    this.consumer_6cy1v2$_0 = consumer;
  }

  Object.defineProperty(ASIDE.prototype, 'consumer', {
    get: function() {
      return this.consumer_6cy1v2$_0;
    }
  });
  ASIDE.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ASIDE',
    interfaces: [CommonAttributeGroupFacadeFlowSectioningContent, HTMLTag]
  };

  function get_asFlowContent_51($receiver_17) {
    return $receiver_17;
  }

  function get_asSectioningContent_2($receiver_17) {
    return $receiver_17;
  }

  function AUDIO(initialAttributes, consumer) {
    HTMLTag.call(this, 'audio', consumer, initialAttributes, null, false, false);
    this.consumer_6dyk28$_0 = consumer;
  }

  Object.defineProperty(AUDIO.prototype, 'consumer', {
    get: function() {
      return this.consumer_6dyk28$_0;
    }
  });
  Object.defineProperty(AUDIO.prototype, 'src', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'src');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'src', newValue);
    }
  });
  Object.defineProperty(AUDIO.prototype, 'autoBuffer', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'autobuffer');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autobuffer', newValue);
    }
  });
  Object.defineProperty(AUDIO.prototype, 'autoPlay', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'autoplay');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'autoplay', newValue);
    }
  });
  Object.defineProperty(AUDIO.prototype, 'loop', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'loop');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'loop', newValue);
    }
  });
  Object.defineProperty(AUDIO.prototype, 'controls', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'controls');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'controls', newValue);
    }
  });
  AUDIO.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AUDIO',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };

  function source$lambda_2($receiver_17) {
  }

  function source_2($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = source$lambda_2;
    visit(new SOURCE(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function get_asFlowContent_52($receiver_17) {
    return $receiver_17;
  }

  function get_asInteractiveContent_11($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_46($receiver_17) {
    return $receiver_17;
  }

  function CANVAS(initialAttributes, consumer) {
    HTMLTag.call(this, 'canvas', consumer, initialAttributes, null, false, false);
    this.consumer_4z17km$_0 = consumer;
  }

  Object.defineProperty(CANVAS.prototype, 'consumer', {
    get: function() {
      return this.consumer_4z17km$_0;
    }
  });
  Object.defineProperty(CANVAS.prototype, 'width', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'width');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'width', newValue);
    }
  });
  Object.defineProperty(CANVAS.prototype, 'height', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'height');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'height', newValue);
    }
  });
  CANVAS.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CANVAS',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_53($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_47($receiver_17) {
    return $receiver_17;
  }

  function CAPTION(initialAttributes, consumer) {
    HTMLTag.call(this, 'caption', consumer, initialAttributes, null, false, false);
    this.consumer_d0y3uo$_0 = consumer;
  }

  Object.defineProperty(CAPTION.prototype, 'consumer', {
    get: function() {
      return this.consumer_d0y3uo$_0;
    }
  });
  CAPTION.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CAPTION',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function CITE(initialAttributes, consumer) {
    HTMLTag.call(this, 'cite', consumer, initialAttributes, null, true, false);
    this.consumer_2isupj$_0 = consumer;
  }

  Object.defineProperty(CITE.prototype, 'consumer', {
    get: function() {
      return this.consumer_2isupj$_0;
    }
  });
  CITE.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CITE',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_54($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_48($receiver_17) {
    return $receiver_17;
  }

  function CODE(initialAttributes, consumer) {
    HTMLTag.call(this, 'code', consumer, initialAttributes, null, true, false);
    this.consumer_2iwcrl$_0 = consumer;
  }

  Object.defineProperty(CODE.prototype, 'consumer', {
    get: function() {
      return this.consumer_2iwcrl$_0;
    }
  });
  CODE.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CODE',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_55($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_49($receiver_17) {
    return $receiver_17;
  }

  function COL(initialAttributes, consumer) {
    HTMLTag.call(this, 'col', consumer, initialAttributes, null, false, true);
    this.consumer_6sj32y$_0 = consumer;
  }

  Object.defineProperty(COL.prototype, 'consumer', {
    get: function() {
      return this.consumer_6sj32y$_0;
    }
  });
  Object.defineProperty(COL.prototype, 'span', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'span');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'span', newValue);
    }
  });
  COL.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'COL',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };

  function COLGROUP(initialAttributes, consumer) {
    HTMLTag.call(this, 'colgroup', consumer, initialAttributes, null, false, false);
    this.consumer_warhlb$_0 = consumer;
  }

  Object.defineProperty(COLGROUP.prototype, 'consumer', {
    get: function() {
      return this.consumer_warhlb$_0;
    }
  });
  Object.defineProperty(COLGROUP.prototype, 'span', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'span');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'span', newValue);
    }
  });
  COLGROUP.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'COLGROUP',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };

  function col$lambda_1($receiver_17) {
  }

  function col_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = col$lambda_1;
    visit(new COL(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function COMMAND(initialAttributes, consumer) {
    HTMLTag.call(this, 'command', consumer, initialAttributes, null, true, true);
    this.consumer_3w1cu3$_0 = consumer;
  }

  Object.defineProperty(COMMAND.prototype, 'consumer', {
    get: function() {
      return this.consumer_3w1cu3$_0;
    }
  });
  Object.defineProperty(COMMAND.prototype, 'type', {
    get: function() {
      return attributeCommandTypeEnumCommandTypeValues.get_txhc1s$(this, 'type');
    },
    set: function(newValue) {
      attributeCommandTypeEnumCommandTypeValues.set_fid0sb$(this, 'type', newValue);
    }
  });
  Object.defineProperty(COMMAND.prototype, 'label', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'label');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'label', newValue);
    }
  });
  Object.defineProperty(COMMAND.prototype, 'icon', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'icon');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'icon', newValue);
    }
  });
  Object.defineProperty(COMMAND.prototype, 'disabled', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'disabled');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'disabled', newValue);
    }
  });
  Object.defineProperty(COMMAND.prototype, 'checked', {
    get: function() {
      return attributeBooleanTicker.get_txhc1s$(this, 'checked');
    },
    set: function(newValue) {
      attributeBooleanTicker.set_fid0sb$(this, 'checked', newValue);
    }
  });
  Object.defineProperty(COMMAND.prototype, 'radioGroup', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'radiogroup');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'radiogroup', newValue);
    }
  });
  COMMAND.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'COMMAND',
    interfaces: [CommonAttributeGroupFacadeFlowMetaDataPhrasingContent, HTMLTag]
  };

  function get_asFlowContent_56($receiver_17) {
    return $receiver_17;
  }

  function get_asMetaDataContent_4($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_50($receiver_17) {
    return $receiver_17;
  }

  function FlowOrHeadingContent() {
  }

  FlowOrHeadingContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'FlowOrHeadingContent',
    interfaces: [Tag]
  };

  function FlowOrMetaDataContent() {
  }

  FlowOrMetaDataContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'FlowOrMetaDataContent',
    interfaces: [FlowOrPhrasingOrMetaDataContent, Tag]
  };

  function FlowOrInteractiveContent() {
  }

  FlowOrInteractiveContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'FlowOrInteractiveContent',
    interfaces: [FlowOrInteractiveOrPhrasingContent, Tag]
  };

  function FlowOrPhrasingContent() {
  }

  FlowOrPhrasingContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'FlowOrPhrasingContent',
    interfaces: [FlowOrPhrasingOrMetaDataContent, FlowOrInteractiveOrPhrasingContent, Tag]
  };

  function FlowOrPhrasingOrMetaDataContent() {
  }

  FlowOrPhrasingOrMetaDataContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'FlowOrPhrasingOrMetaDataContent',
    interfaces: [Tag]
  };

  function SectioningOrFlowContent() {
  }

  SectioningOrFlowContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'SectioningOrFlowContent',
    interfaces: [Tag]
  };

  function FlowOrInteractiveOrPhrasingContent() {
  }

  FlowOrInteractiveOrPhrasingContent.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'FlowOrInteractiveOrPhrasingContent',
    interfaces: [Tag]
  };

  function h1$lambda_1($receiver_17) {
  }

  function h1_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h1$lambda_1;
    visit(new H1(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function h2$lambda_1($receiver_17) {
  }

  function h2_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h2$lambda_1;
    visit(new H2(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function h3$lambda_1($receiver_17) {
  }

  function h3_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h3$lambda_1;
    visit(new H3(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function h4$lambda_1($receiver_17) {
  }

  function h4_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h4$lambda_1;
    visit(new H4(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function h5$lambda_1($receiver_17) {
  }

  function h5_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h5$lambda_1;
    visit(new H5(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function h6$lambda_1($receiver_17) {
  }

  function h6_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h6$lambda_1;
    visit(new H6(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function hGroup$lambda_1($receiver_17) {
  }

  function hGroup_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = hGroup$lambda_1;
    visit(new HGROUP(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function style$lambda_5($receiver_17) {
  }

  function style_5($receiver_17, type, block) {
    if (type === void 0)
      type = null;
    if (block === void 0)
      block = style$lambda_5;
    visit(new STYLE(attributesMapOf_0('type', type), $receiver_17.consumer), block);
  }

  function style$lambda_6(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function style_6($receiver_17, type, content) {
    if (type === void 0)
      type = null;
    if (content === void 0)
      content = '';
    visit(new STYLE(attributesMapOf_0('type', type), $receiver_17.consumer), style$lambda_6(content));
  }

  function details$lambda_1($receiver_17) {
  }

  function details_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = details$lambda_1;
    visit(new DETAILS(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function abbr$lambda_1($receiver_17) {
  }

  function abbr_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = abbr$lambda_1;
    visit(new ABBR(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function area$lambda_1($receiver_17) {
  }

  function area_1($receiver_17, shape, alt, classes, block) {
    if (shape === void 0)
      shape = null;
    if (alt === void 0)
      alt = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = area$lambda_1;
    visit(new AREA(attributesMapOf(['Shape', shape != null ? enumEncode(shape) : null, 'alt', alt, 'class', classes]), $receiver_17.consumer), block);
  }

  function rectArea$lambda($receiver_17) {
  }

  function rectArea($receiver_17, alt, classes, block) {
    if (alt === void 0)
      alt = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = rectArea$lambda;
    visit(new AREA(attributesMapOf(['Shape', AreaShape$rect_getInstance().realValue, 'alt', alt, 'class', classes]), $receiver_17.consumer), block);
  }

  function circleArea$lambda($receiver_17) {
  }

  function circleArea($receiver_17, alt, classes, block) {
    if (alt === void 0)
      alt = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = circleArea$lambda;
    visit(new AREA(attributesMapOf(['Shape', AreaShape$circle_getInstance().realValue, 'alt', alt, 'class', classes]), $receiver_17.consumer), block);
  }

  function polyArea$lambda($receiver_17) {
  }

  function polyArea($receiver_17, alt, classes, block) {
    if (alt === void 0)
      alt = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = polyArea$lambda;
    visit(new AREA(attributesMapOf(['Shape', AreaShape$poly_getInstance().realValue, 'alt', alt, 'class', classes]), $receiver_17.consumer), block);
  }

  function defaultArea$lambda($receiver_17) {
  }

  function defaultArea($receiver_17, alt, classes, block) {
    if (alt === void 0)
      alt = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = defaultArea$lambda;
    visit(new AREA(attributesMapOf(['Shape', AreaShape$default_getInstance().realValue, 'alt', alt, 'class', classes]), $receiver_17.consumer), block);
  }

  function b$lambda_1($receiver_17) {
  }

  function b_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = b$lambda_1;
    visit(new B(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function bdi$lambda_1($receiver_17) {
  }

  function bdi_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = bdi$lambda_1;
    visit(new BDI(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function bdo$lambda_1($receiver_17) {
  }

  function bdo_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = bdo$lambda_1;
    visit(new BDO(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function br$lambda_1($receiver_17) {
  }

  function br_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = br$lambda_1;
    visit(new BR(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function canvas$lambda_3($receiver_17) {
  }

  function canvas_3($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = canvas$lambda_3;
    visit(new CANVAS(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function canvas$lambda_4(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function canvas_4($receiver_17, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    visit(new CANVAS(attributesMapOf_0('class', classes), $receiver_17.consumer), canvas$lambda_4(content));
  }

  function cite$lambda_1($receiver_17) {
  }

  function cite_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = cite$lambda_1;
    visit(new CITE(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function code$lambda_1($receiver_17) {
  }

  function code_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = code$lambda_1;
    visit(new CODE(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function dataList$lambda_1($receiver_17) {
  }

  function dataList_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dataList$lambda_1;
    visit(new DATALIST(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function del$lambda_1($receiver_17) {
  }

  function del_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = del$lambda_1;
    visit(new DEL(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function dfn$lambda_1($receiver_17) {
  }

  function dfn_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dfn$lambda_1;
    visit(new DFN(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function em$lambda_1($receiver_17) {
  }

  function em_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = em$lambda_1;
    visit(new EM(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function i$lambda_1($receiver_17) {
  }

  function i_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = i$lambda_1;
    visit(new I(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function ins$lambda_1($receiver_17) {
  }

  function ins_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = ins$lambda_1;
    visit(new INS(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function kbd$lambda_1($receiver_17) {
  }

  function kbd_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = kbd$lambda_1;
    visit(new KBD(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function map$lambda_1($receiver_17) {
  }

  function map_2($receiver_17, name, classes, block) {
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = map$lambda_1;
    visit(new MAP(attributesMapOf(['name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function mark$lambda_1($receiver_17) {
  }

  function mark_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = mark$lambda_1;
    visit(new MARK(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function math$lambda_1($receiver_17) {
  }

  function math_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = math$lambda_1;
    visit(new MATH(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function meter$lambda_1($receiver_17) {
  }

  function meter_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = meter$lambda_1;
    visit(new METER(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function output$lambda_1($receiver_17) {
  }

  function output_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = output$lambda_1;
    visit(new OUTPUT(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function progress$lambda_1($receiver_17) {
  }

  function progress_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = progress$lambda_1;
    visit(new PROGRESS(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function q$lambda_1($receiver_17) {
  }

  function q_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = q$lambda_1;
    visit(new Q(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function ruby$lambda_1($receiver_17) {
  }

  function ruby_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = ruby$lambda_1;
    visit(new RUBY(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function samp$lambda_1($receiver_17) {
  }

  function samp_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = samp$lambda_1;
    visit(new SAMP(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function small$lambda_1($receiver_17) {
  }

  function small_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = small$lambda_1;
    visit(new SMALL(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function span$lambda_1($receiver_17) {
  }

  function span_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = span$lambda_1;
    visit(new SPAN(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function strong$lambda_1($receiver_17) {
  }

  function strong_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = strong$lambda_1;
    visit(new STRONG(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function sub$lambda_1($receiver_17) {
  }

  function sub_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = sub$lambda_1;
    visit(new SUB(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function sup$lambda_1($receiver_17) {
  }

  function sup_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = sup$lambda_1;
    visit(new SUP(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function svg$lambda_3($receiver_17) {
  }

  function svg_3($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = svg$lambda_3;
    visit(new SVG(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function svg$lambda_4(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function svg_4($receiver_17, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    visit(new SVG(attributesMapOf_0('class', classes), $receiver_17.consumer), svg$lambda_4(content));
  }

  function time$lambda_1($receiver_17) {
  }

  function time_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = time$lambda_1;
    visit(new TIME(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function var_$lambda_1($receiver_17) {
  }

  function var__1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = var_$lambda_1;
    visit(new VAR_(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function command$lambda_2($receiver_17) {
  }

  function command_2($receiver_17, type, classes, block) {
    if (type === void 0)
      type = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = command$lambda_2;
    visit(new COMMAND(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver_17.consumer), block);
  }

  function commandCommand$lambda_0($receiver_17) {
  }

  function commandCommand_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = commandCommand$lambda_0;
    visit(new COMMAND(attributesMapOf(['type', CommandType$command_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function checkBoxCommand$lambda_0($receiver_17) {
  }

  function checkBoxCommand_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = checkBoxCommand$lambda_0;
    visit(new COMMAND(attributesMapOf(['type', CommandType$checkBox_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function radioCommand$lambda_0($receiver_17) {
  }

  function radioCommand_0($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = radioCommand$lambda_0;
    visit(new COMMAND(attributesMapOf(['type', CommandType$radio_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function link$lambda_2($receiver_17) {
  }

  function link_2($receiver_17, href, rel, type, block) {
    if (href === void 0)
      href = null;
    if (rel === void 0)
      rel = null;
    if (type === void 0)
      type = null;
    if (block === void 0)
      block = link$lambda_2;
    visit(new LINK(attributesMapOf(['href', href, 'rel', rel, 'type', type]), $receiver_17.consumer), block);
  }

  function meta$lambda_2($receiver_17) {
  }

  function meta_2($receiver_17, name, content, block) {
    if (name === void 0)
      name = null;
    if (content === void 0)
      content = null;
    if (block === void 0)
      block = meta$lambda_2;
    visit(new META(attributesMapOf(['name', name, 'content', content]), $receiver_17.consumer), block);
  }

  function noScript$lambda_2($receiver_17) {
  }

  function noScript_2($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = noScript$lambda_2;
    visit(new NOSCRIPT(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function script$lambda_3($receiver_17) {
  }

  function script_3($receiver_17, type, src, block) {
    if (type === void 0)
      type = null;
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = script$lambda_3;
    visit(new SCRIPT(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'src', src]), $receiver_17.consumer), block);
  }

  function textEcmaScriptScript$lambda_0($receiver_17) {
  }

  function textEcmaScriptScript_0($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textEcmaScriptScript$lambda_0;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textEcmaScript_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textJavaScriptScript$lambda_0($receiver_17) {
  }

  function textJavaScriptScript_0($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textJavaScriptScript$lambda_0;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textJavaScript_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textJavaScript10Script$lambda_0($receiver_17) {
  }

  function textJavaScript10Script_0($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textJavaScript10Script$lambda_0;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textJavaScript10_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textJavaScript11Script$lambda_0($receiver_17) {
  }

  function textJavaScript11Script_0($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textJavaScript11Script$lambda_0;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textJavaScript11_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textJavaScript12Script$lambda_0($receiver_17) {
  }

  function textJavaScript12Script_0($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textJavaScript12Script$lambda_0;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textJavaScript12_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textJavaScript13Script$lambda_0($receiver_17) {
  }

  function textJavaScript13Script_0($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textJavaScript13Script$lambda_0;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textJavaScript13_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textJavaScript14Script$lambda_0($receiver_17) {
  }

  function textJavaScript14Script_0($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textJavaScript14Script$lambda_0;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textJavaScript14_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textJavaScript15Script$lambda_0($receiver_17) {
  }

  function textJavaScript15Script_0($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textJavaScript15Script$lambda_0;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textJavaScript15_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textJScriptScript$lambda_0($receiver_17) {
  }

  function textJScriptScript_0($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textJScriptScript$lambda_0;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textJScript_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textXJavaScriptScript$lambda_0($receiver_17) {
  }

  function textXJavaScriptScript_0($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textXJavaScriptScript$lambda_0;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textXJavaScript_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textXEcmaScriptScript$lambda_0($receiver_17) {
  }

  function textXEcmaScriptScript_0($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textXEcmaScriptScript$lambda_0;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textXEcmaScript_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function textVbScriptScript$lambda_0($receiver_17) {
  }

  function textVbScriptScript_0($receiver_17, src, block) {
    if (src === void 0)
      src = null;
    if (block === void 0)
      block = textVbScriptScript$lambda_0;
    visit(new SCRIPT(attributesMapOf(['type', ScriptType$textVbScript_getInstance().realValue, 'src', src]), $receiver_17.consumer), block);
  }

  function article$lambda_1($receiver_17) {
  }

  function article_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = article$lambda_1;
    visit(new ARTICLE(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function aside$lambda_1($receiver_17) {
  }

  function aside_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = aside$lambda_1;
    visit(new ASIDE(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function nav$lambda_1($receiver_17) {
  }

  function nav_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = nav$lambda_1;
    visit(new NAV(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function section$lambda_1($receiver_17) {
  }

  function section_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = section$lambda_1;
    visit(new SECTION(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function a$lambda_1($receiver_17) {
  }

  function a_1($receiver_17, href, target, classes, block) {
    if (href === void 0)
      href = null;
    if (target === void 0)
      target = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = a$lambda_1;
    visit(new A(attributesMapOf(['href', href, 'target', target, 'class', classes]), $receiver_17.consumer), block);
  }

  function audio$lambda_1($receiver_17) {
  }

  function audio_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = audio$lambda_1;
    visit(new AUDIO(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function button$lambda_1($receiver_17) {
  }

  function button_1($receiver_17, formEncType, formMethod, type, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (type === void 0)
      type = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = button$lambda_1;
    visit(new BUTTON(attributesMapOf(['formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver_17.consumer), block);
  }

  function getButton$lambda($receiver_17) {
  }

  function getButton($receiver_17, formEncType, type, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (type === void 0)
      type = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = getButton$lambda;
    visit(new BUTTON(attributesMapOf(['formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', ButtonFormMethod$get_getInstance().realValue, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver_17.consumer), block);
  }

  function postButton$lambda($receiver_17) {
  }

  function postButton($receiver_17, formEncType, type, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (type === void 0)
      type = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = postButton$lambda;
    visit(new BUTTON(attributesMapOf(['formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', ButtonFormMethod$post_getInstance().realValue, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver_17.consumer), block);
  }

  function putButton$lambda($receiver_17) {
  }

  function putButton($receiver_17, formEncType, type, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (type === void 0)
      type = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = putButton$lambda;
    visit(new BUTTON(attributesMapOf(['formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', ButtonFormMethod$put_getInstance().realValue, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver_17.consumer), block);
  }

  function deleteButton$lambda($receiver_17) {
  }

  function deleteButton($receiver_17, formEncType, type, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (type === void 0)
      type = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = deleteButton$lambda;
    visit(new BUTTON(attributesMapOf(['formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', ButtonFormMethod$delete_getInstance().realValue, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver_17.consumer), block);
  }

  function embed$lambda_1($receiver_17) {
  }

  function embed_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = embed$lambda_1;
    visit(new EMBED(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function iframe$lambda_3($receiver_17) {
  }

  function iframe_3($receiver_17, sandbox, classes, block) {
    if (sandbox === void 0)
      sandbox = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = iframe$lambda_3;
    visit(new IFRAME(attributesMapOf(['sandbox', sandbox != null ? enumEncode(sandbox) : null, 'class', classes]), $receiver_17.consumer), block);
  }

  function iframe$lambda_4(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function iframe_4($receiver_17, sandbox, classes, content) {
    if (sandbox === void 0)
      sandbox = null;
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    visit(new IFRAME(attributesMapOf(['sandbox', sandbox != null ? enumEncode(sandbox) : null, 'class', classes]), $receiver_17.consumer), iframe$lambda_4(content));
  }

  function allowSameOriginIframe$lambda($receiver_17) {
  }

  function allowSameOriginIframe($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = allowSameOriginIframe$lambda;
    visit(new IFRAME(attributesMapOf(['sandbox', IframeSandbox$allowSameOrigin_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function allowFormSIframe$lambda($receiver_17) {
  }

  function allowFormSIframe($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = allowFormSIframe$lambda;
    visit(new IFRAME(attributesMapOf(['sandbox', IframeSandbox$allowFormS_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function allowScriptsIframe$lambda($receiver_17) {
  }

  function allowScriptsIframe($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = allowScriptsIframe$lambda;
    visit(new IFRAME(attributesMapOf(['sandbox', IframeSandbox$allowScripts_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function allowSameOriginIframe$lambda_0(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function allowSameOriginIframe_0($receiver_17, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    visit(new IFRAME(attributesMapOf(['sandbox', IframeSandbox$allowSameOrigin_getInstance().realValue, 'class', classes]), $receiver_17.consumer), allowSameOriginIframe$lambda_0(content));
  }

  function allowFormSIframe$lambda_0(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function allowFormSIframe_0($receiver_17, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    visit(new IFRAME(attributesMapOf(['sandbox', IframeSandbox$allowFormS_getInstance().realValue, 'class', classes]), $receiver_17.consumer), allowFormSIframe$lambda_0(content));
  }

  function allowScriptsIframe$lambda_0(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function allowScriptsIframe_0($receiver_17, classes, content) {
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    visit(new IFRAME(attributesMapOf(['sandbox', IframeSandbox$allowScripts_getInstance().realValue, 'class', classes]), $receiver_17.consumer), allowScriptsIframe$lambda_0(content));
  }

  function img$lambda_1($receiver_17) {
  }

  function img_1($receiver_17, alt, src, classes, block) {
    if (alt === void 0)
      alt = null;
    if (src === void 0)
      src = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = img$lambda_1;
    visit(new IMG(attributesMapOf(['alt', alt, 'src', src, 'class', classes]), $receiver_17.consumer), block);
  }

  function input$lambda_1($receiver_17) {
  }

  function input_1($receiver_17, type, formEncType, formMethod, name, classes, block) {
    if (type === void 0)
      type = null;
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = input$lambda_1;
    visit(new INPUT(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function buttonInput$lambda($receiver_17) {
  }

  function buttonInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = buttonInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$button_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function checkBoxInput$lambda($receiver_17) {
  }

  function checkBoxInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = checkBoxInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$checkBox_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function colorInput$lambda($receiver_17) {
  }

  function colorInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = colorInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$color_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function dateInput$lambda($receiver_17) {
  }

  function dateInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dateInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$date_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function dateTimeInput$lambda($receiver_17) {
  }

  function dateTimeInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dateTimeInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$dateTime_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function dateTimeLocalInput$lambda($receiver_17) {
  }

  function dateTimeLocalInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = dateTimeLocalInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$dateTimeLocal_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function emailInput$lambda($receiver_17) {
  }

  function emailInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = emailInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$email_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function fileInput$lambda($receiver_17) {
  }

  function fileInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = fileInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$file_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function hiddenInput$lambda($receiver_17) {
  }

  function hiddenInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = hiddenInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$hidden_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function imageInput$lambda($receiver_17) {
  }

  function imageInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = imageInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$image_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function monthInput$lambda($receiver_17) {
  }

  function monthInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = monthInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$month_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function numberInput$lambda($receiver_17) {
  }

  function numberInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = numberInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$number_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function passwordInput$lambda($receiver_17) {
  }

  function passwordInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = passwordInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$password_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function radioInput$lambda($receiver_17) {
  }

  function radioInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = radioInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$radio_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function rangeInput$lambda($receiver_17) {
  }

  function rangeInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = rangeInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$range_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function resetInput$lambda($receiver_17) {
  }

  function resetInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = resetInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$reset_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function searchInput$lambda($receiver_17) {
  }

  function searchInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = searchInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$search_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function submitInput$lambda($receiver_17) {
  }

  function submitInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = submitInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$submit_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function textInput$lambda($receiver_17) {
  }

  function textInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = textInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$text_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function telInput$lambda($receiver_17) {
  }

  function telInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = telInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$tel_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function timeInput$lambda($receiver_17) {
  }

  function timeInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = timeInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$time_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function urlInput$lambda($receiver_17) {
  }

  function urlInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = urlInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$url_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function weekInput$lambda($receiver_17) {
  }

  function weekInput($receiver_17, formEncType, formMethod, name, classes, block) {
    if (formEncType === void 0)
      formEncType = null;
    if (formMethod === void 0)
      formMethod = null;
    if (name === void 0)
      name = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = weekInput$lambda;
    visit(new INPUT(attributesMapOf(['type', InputType$week_getInstance().realValue, 'formenctype', formEncType != null ? enumEncode(formEncType) : null, 'formmethod', formMethod != null ? enumEncode(formMethod) : null, 'name', name, 'class', classes]), $receiver_17.consumer), block);
  }

  function keyGen$lambda_1($receiver_17) {
  }

  function keyGen_1($receiver_17, keyType, classes, block) {
    if (keyType === void 0)
      keyType = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = keyGen$lambda_1;
    visit(new KEYGEN(attributesMapOf(['keytype', keyType != null ? enumEncode(keyType) : null, 'class', classes]), $receiver_17.consumer), block);
  }

  function rsaKeyGen$lambda($receiver_17) {
  }

  function rsaKeyGen($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = rsaKeyGen$lambda;
    visit(new KEYGEN(attributesMapOf(['keytype', KeyGenKeyType$rsa_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function label$lambda_1($receiver_17) {
  }

  function label_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = label$lambda_1;
    visit(new LABEL(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function object_$lambda_1($receiver_17) {
  }

  function object__1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = object_$lambda_1;
    visit(new OBJECT_(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function select$lambda_1($receiver_17) {
  }

  function select_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = select$lambda_1;
    visit(new SELECT(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function textArea$lambda_3($receiver_17) {
  }

  function textArea_3($receiver_17, rows, cols, wrap, classes, block) {
    if (rows === void 0)
      rows = null;
    if (cols === void 0)
      cols = null;
    if (wrap === void 0)
      wrap = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = textArea$lambda_3;
    visit(new TEXTAREA(attributesMapOf(['rows', rows, 'cols', cols, 'wrap', wrap != null ? enumEncode(wrap) : null, 'class', classes]), $receiver_17.consumer), block);
  }

  function textArea$lambda_4(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function textArea_4($receiver_17, rows, cols, wrap, classes, content) {
    if (rows === void 0)
      rows = null;
    if (cols === void 0)
      cols = null;
    if (wrap === void 0)
      wrap = null;
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    visit(new TEXTAREA(attributesMapOf(['rows', rows, 'cols', cols, 'wrap', wrap != null ? enumEncode(wrap) : null, 'class', classes]), $receiver_17.consumer), textArea$lambda_4(content));
  }

  function hardTextArea$lambda($receiver_17) {
  }

  function hardTextArea($receiver_17, rows, cols, classes, block) {
    if (rows === void 0)
      rows = null;
    if (cols === void 0)
      cols = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = hardTextArea$lambda;
    visit(new TEXTAREA(attributesMapOf(['rows', rows, 'cols', cols, 'wrap', TextAreaWrap$hard_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function softTextArea$lambda($receiver_17) {
  }

  function softTextArea($receiver_17, rows, cols, classes, block) {
    if (rows === void 0)
      rows = null;
    if (cols === void 0)
      cols = null;
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = softTextArea$lambda;
    visit(new TEXTAREA(attributesMapOf(['rows', rows, 'cols', cols, 'wrap', TextAreaWrap$soft_getInstance().realValue, 'class', classes]), $receiver_17.consumer), block);
  }

  function hardTextArea$lambda_0(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function hardTextArea_0($receiver_17, rows, cols, classes, content) {
    if (rows === void 0)
      rows = null;
    if (cols === void 0)
      cols = null;
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    visit(new TEXTAREA(attributesMapOf(['rows', rows, 'cols', cols, 'wrap', TextAreaWrap$hard_getInstance().realValue, 'class', classes]), $receiver_17.consumer), hardTextArea$lambda_0(content));
  }

  function softTextArea$lambda_0(closure$content) {
    return function($receiver_17) {
      $receiver_17.unaryPlus_pdl1vz$(closure$content);
    };
  }

  function softTextArea_0($receiver_17, rows, cols, classes, content) {
    if (rows === void 0)
      rows = null;
    if (cols === void 0)
      cols = null;
    if (classes === void 0)
      classes = null;
    if (content === void 0)
      content = '';
    visit(new TEXTAREA(attributesMapOf(['rows', rows, 'cols', cols, 'wrap', TextAreaWrap$soft_getInstance().realValue, 'class', classes]), $receiver_17.consumer), softTextArea$lambda_0(content));
  }

  function video$lambda_1($receiver_17) {
  }

  function video_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = video$lambda_1;
    visit(new VIDEO(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function EM(initialAttributes, consumer) {
    HTMLTag.call(this, 'em', consumer, initialAttributes, null, true, false);
    this.consumer_tkg7ye$_0 = consumer;
  }

  Object.defineProperty(EM.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkg7ye$_0;
    }
  });
  EM.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'EM',
    interfaces: [HtmlBlockInlineTag, HTMLTag]
  };

  function get_asFlowContent_57($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_51($receiver_17) {
    return $receiver_17;
  }

  function EMBED(initialAttributes, consumer) {
    HTMLTag.call(this, 'embed', consumer, initialAttributes, null, true, true);
    this.consumer_85pbot$_0 = consumer;
  }

  Object.defineProperty(EMBED.prototype, 'consumer', {
    get: function() {
      return this.consumer_85pbot$_0;
    }
  });
  Object.defineProperty(EMBED.prototype, 'src', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'src');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'src', newValue);
    }
  });
  Object.defineProperty(EMBED.prototype, 'height', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'height');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'height', newValue);
    }
  });
  Object.defineProperty(EMBED.prototype, 'width', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'width');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'width', newValue);
    }
  });
  Object.defineProperty(EMBED.prototype, 'type', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'type');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'type', newValue);
    }
  });
  EMBED.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'EMBED',
    interfaces: [CommonAttributeGroupFacadeFlowInteractivePhrasingContent, HTMLTag]
  };

  function get_asFlowContent_58($receiver_17) {
    return $receiver_17;
  }

  function get_asInteractiveContent_12($receiver_17) {
    return $receiver_17;
  }

  function get_asPhrasingContent_52($receiver_17) {
    return $receiver_17;
  }

  function H1(initialAttributes, consumer) {
    HTMLTag.call(this, 'h1', consumer, initialAttributes, null, false, false);
    this.consumer_tkg9id$_0 = consumer;
  }

  Object.defineProperty(H1.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkg9id$_0;
    }
  });
  H1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'H1',
    interfaces: [CommonAttributeGroupFacadeFlowHeadingPhrasingContent, HTMLTag]
  };

  function H2(initialAttributes, consumer) {
    HTMLTag.call(this, 'h2', consumer, initialAttributes, null, false, false);
    this.consumer_tkg9j8$_0 = consumer;
  }

  Object.defineProperty(H2.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkg9j8$_0;
    }
  });
  H2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'H2',
    interfaces: [CommonAttributeGroupFacadeFlowHeadingPhrasingContent, HTMLTag]
  };

  function H3(initialAttributes, consumer) {
    HTMLTag.call(this, 'h3', consumer, initialAttributes, null, false, false);
    this.consumer_tkg9k3$_0 = consumer;
  }

  Object.defineProperty(H3.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkg9k3$_0;
    }
  });
  H3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'H3',
    interfaces: [CommonAttributeGroupFacadeFlowHeadingPhrasingContent, HTMLTag]
  };

  function H4(initialAttributes, consumer) {
    HTMLTag.call(this, 'h4', consumer, initialAttributes, null, false, false);
    this.consumer_tkg9ky$_0 = consumer;
  }

  Object.defineProperty(H4.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkg9ky$_0;
    }
  });
  H4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'H4',
    interfaces: [CommonAttributeGroupFacadeFlowHeadingPhrasingContent, HTMLTag]
  };

  function H5(initialAttributes, consumer) {
    HTMLTag.call(this, 'h5', consumer, initialAttributes, null, false, false);
    this.consumer_tkg9lt$_0 = consumer;
  }

  Object.defineProperty(H5.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkg9lt$_0;
    }
  });
  H5.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'H5',
    interfaces: [CommonAttributeGroupFacadeFlowHeadingPhrasingContent, HTMLTag]
  };

  function H6(initialAttributes, consumer) {
    HTMLTag.call(this, 'h6', consumer, initialAttributes, null, false, false);
    this.consumer_tkg9mo$_0 = consumer;
  }

  Object.defineProperty(H6.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkg9mo$_0;
    }
  });
  H6.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'H6',
    interfaces: [CommonAttributeGroupFacadeFlowHeadingPhrasingContent, HTMLTag]
  };

  function HEAD(initialAttributes, consumer) {
    HTMLTag.call(this, 'head', consumer, initialAttributes, null, false, false);
    this.consumer_2lgvm6$_0 = consumer;
  }

  Object.defineProperty(HEAD.prototype, 'consumer', {
    get: function() {
      return this.consumer_2lgvm6$_0;
    }
  });
  HEAD.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HEAD',
    interfaces: [HtmlHeadTag, HTMLTag]
  };

  function HEADER(initialAttributes, consumer) {
    HTMLTag.call(this, 'header', consumer, initialAttributes, null, false, false);
    this.consumer_90mbr5$_0 = consumer;
  }

  Object.defineProperty(HEADER.prototype, 'consumer', {
    get: function() {
      return this.consumer_90mbr5$_0;
    }
  });
  HEADER.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HEADER',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function HGROUP(initialAttributes, consumer) {
    HTMLTag.call(this, 'hgroup', consumer, initialAttributes, null, false, false);
    this.consumer_a89fav$_0 = consumer;
  }

  Object.defineProperty(HGROUP.prototype, 'consumer', {
    get: function() {
      return this.consumer_a89fav$_0;
    }
  });
  HGROUP.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HGROUP',
    interfaces: [CommonAttributeGroupFacadeFlowHeadingContent, HTMLTag]
  };

  function h1$lambda_2($receiver_17) {
  }

  function h1_2($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h1$lambda_2;
    visit(new H1(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function h2$lambda_2($receiver_17) {
  }

  function h2_2($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h2$lambda_2;
    visit(new H2(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function h3$lambda_2($receiver_17) {
  }

  function h3_2($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h3$lambda_2;
    visit(new H3(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function h4$lambda_2($receiver_17) {
  }

  function h4_2($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h4$lambda_2;
    visit(new H4(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function h5$lambda_2($receiver_17) {
  }

  function h5_2($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h5$lambda_2;
    visit(new H5(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function h6$lambda_2($receiver_17) {
  }

  function h6_2($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = h6$lambda_2;
    visit(new H6(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function get_asFlowContent_59($receiver_17) {
    return $receiver_17;
  }

  function get_asHeadingContent($receiver_17) {
    return $receiver_17;
  }

  function HR(initialAttributes, consumer) {
    HTMLTag.call(this, 'hr', consumer, initialAttributes, null, false, true);
    this.consumer_tkgaas$_0 = consumer;
  }

  Object.defineProperty(HR.prototype, 'consumer', {
    get: function() {
      return this.consumer_tkgaas$_0;
    }
  });
  HR.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HR',
    interfaces: [HtmlBlockTag, HTMLTag]
  };

  function HTML(initialAttributes, consumer) {
    HTMLTag.call(this, 'html', consumer, initialAttributes, null, false, false);
    this.consumer_2lqpib$_0 = consumer;
  }

  Object.defineProperty(HTML.prototype, 'consumer', {
    get: function() {
      return this.consumer_2lqpib$_0;
    }
  });
  Object.defineProperty(HTML.prototype, 'manifest', {
    get: function() {
      return attributeStringString.get_txhc1s$(this, 'manifest');
    },
    set: function(newValue) {
      attributeStringString.set_fid0sb$(this, 'manifest', newValue);
    }
  });
  HTML.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HTML',
    interfaces: [CommonAttributeGroupFacade, HTMLTag]
  };

  function body$lambda_1($receiver_17) {
  }

  function body_1($receiver_17, classes, block) {
    if (classes === void 0)
      classes = null;
    if (block === void 0)
      block = body$lambda_1;
    visit(new BODY(attributesMapOf_0('class', classes), $receiver_17.consumer), block);
  }

  function head$lambda_1($receiver_17) {
  }

  function head_1($receiver_17, block) {
    if (block === void 0)
      block = head$lambda_1;
    visit(new HEAD(emptyMap, $receiver_17.consumer), block);
  }

  function Entities(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function Entities_initFields() {
    Entities_initFields = function() {
    };
    Entities$nbsp_instance = new Entities('nbsp', 0);
    Entities$lt_instance = new Entities('lt', 1);
    Entities$gt_instance = new Entities('gt', 2);
    Entities$quot_instance = new Entities('quot', 3);
    Entities$amp_instance = new Entities('amp', 4);
    Entities$apos_instance = new Entities('apos', 5);
    Entities$iexcl_instance = new Entities('iexcl', 6);
    Entities$cent_instance = new Entities('cent', 7);
    Entities$pound_instance = new Entities('pound', 8);
    Entities$curren_instance = new Entities('curren', 9);
    Entities$yen_instance = new Entities('yen', 10);
    Entities$brvbar_instance = new Entities('brvbar', 11);
    Entities$sect_instance = new Entities('sect', 12);
    Entities$uml_instance = new Entities('uml', 13);
    Entities$copy_instance = new Entities('copy', 14);
    Entities$ordf_instance = new Entities('ordf', 15);
    Entities$laquo_instance = new Entities('laquo', 16);
    Entities$not_instance = new Entities('not', 17);
    Entities$shy_instance = new Entities('shy', 18);
    Entities$reg_instance = new Entities('reg', 19);
    Entities$macr_instance = new Entities('macr', 20);
    Entities$deg_instance = new Entities('deg', 21);
    Entities$plusmn_instance = new Entities('plusmn', 22);
    Entities$sup2_instance = new Entities('sup2', 23);
    Entities$sup3_instance = new Entities('sup3', 24);
    Entities$acute_instance = new Entities('acute', 25);
    Entities$micro_instance = new Entities('micro', 26);
    Entities$para_instance = new Entities('para', 27);
    Entities$middot_instance = new Entities('middot', 28);
    Entities$cedil_instance = new Entities('cedil', 29);
    Entities$sup1_instance = new Entities('sup1', 30);
    Entities$ordm_instance = new Entities('ordm', 31);
    Entities$raquo_instance = new Entities('raquo', 32);
    Entities$frac14_instance = new Entities('frac14', 33);
    Entities$frac12_instance = new Entities('frac12', 34);
    Entities$frac34_instance = new Entities('frac34', 35);
    Entities$iquest_instance = new Entities('iquest', 36);
    Entities$Agrave_instance = new Entities('Agrave', 37);
    Entities$Aacute_instance = new Entities('Aacute', 38);
    Entities$Acirc_instance = new Entities('Acirc', 39);
    Entities$Atilde_instance = new Entities('Atilde', 40);
    Entities$Auml_instance = new Entities('Auml', 41);
    Entities$Aring_instance = new Entities('Aring', 42);
    Entities$AElig_instance = new Entities('AElig', 43);
    Entities$Ccedil_instance = new Entities('Ccedil', 44);
    Entities$Egrave_instance = new Entities('Egrave', 45);
    Entities$Eacute_instance = new Entities('Eacute', 46);
    Entities$Ecirc_instance = new Entities('Ecirc', 47);
    Entities$Euml_instance = new Entities('Euml', 48);
    Entities$Igrave_instance = new Entities('Igrave', 49);
    Entities$Iacute_instance = new Entities('Iacute', 50);
    Entities$Icirc_instance = new Entities('Icirc', 51);
    Entities$Iuml_instance = new Entities('Iuml', 52);
    Entities$ETH_instance = new Entities('ETH', 53);
    Entities$Ntilde_instance = new Entities('Ntilde', 54);
    Entities$Ograve_instance = new Entities('Ograve', 55);
    Entities$Oacute_instance = new Entities('Oacute', 56);
    Entities$Ocirc_instance = new Entities('Ocirc', 57);
    Entities$Otilde_instance = new Entities('Otilde', 58);
    Entities$Ouml_instance = new Entities('Ouml', 59);
    Entities$times_instance = new Entities('times', 60);
    Entities$Oslash_instance = new Entities('Oslash', 61);
    Entities$Ugrave_instance = new Entities('Ugrave', 62);
    Entities$Uacute_instance = new Entities('Uacute', 63);
    Entities$Ucirc_instance = new Entities('Ucirc', 64);
    Entities$Uuml_instance = new Entities('Uuml', 65);
    Entities$Yacute_instance = new Entities('Yacute', 66);
    Entities$THORN_instance = new Entities('THORN', 67);
    Entities$szlig_instance = new Entities('szlig', 68);
    Entities$agrave_instance = new Entities('agrave', 69);
    Entities$aacute_instance = new Entities('aacute', 70);
    Entities$acirc_instance = new Entities('acirc', 71);
    Entities$atilde_instance = new Entities('atilde', 72);
    Entities$auml_instance = new Entities('auml', 73);
    Entities$aring_instance = new Entities('aring', 74);
    Entities$aelig_instance = new Entities('aelig', 75);
    Entities$ccedil_instance = new Entities('ccedil', 76);
    Entities$egrave_instance = new Entities('egrave', 77);
    Entities$eacute_instance = new Entities('eacute', 78);
    Entities$ecirc_instance = new Entities('ecirc', 79);
    Entities$euml_instance = new Entities('euml', 80);
    Entities$igrave_instance = new Entities('igrave', 81);
    Entities$iacute_instance = new Entities('iacute', 82);
    Entities$icirc_instance = new Entities('icirc', 83);
    Entities$iuml_instance = new Entities('iuml', 84);
    Entities$eth_instance = new Entities('eth', 85);
    Entities$ntilde_instance = new Entities('ntilde', 86);
    Entities$ograve_instance = new Entities('ograve', 87);
    Entities$oacute_instance = new Entities('oacute', 88);
    Entities$ocirc_instance = new Entities('ocirc', 89);
    Entities$otilde_instance = new Entities('otilde', 90);
    Entities$ouml_instance = new Entities('ouml', 91);
    Entities$divide_instance = new Entities('divide', 92);
    Entities$oslash_instance = new Entities('oslash', 93);
    Entities$ugrave_instance = new Entities('ugrave', 94);
    Entities$uacute_instance = new Entities('uacute', 95);
    Entities$ucirc_instance = new Entities('ucirc', 96);
    Entities$uuml_instance = new Entities('uuml', 97);
    Entities$yacute_instance = new Entities('yacute', 98);
    Entities$thorn_instance = new Entities('thorn', 99);
    Entities$yuml_instance = new Entities('yuml', 100);
  }

  var Entities$nbsp_instance;

  function Entities$nbsp_getInstance() {
    Entities_initFields();
    return Entities$nbsp_instance;
  }

  var Entities$lt_instance;

  function Entities$lt_getInstance() {
    Entities_initFields();
    return Entities$lt_instance;
  }

  var Entities$gt_instance;

  function Entities$gt_getInstance() {
    Entities_initFields();
    return Entities$gt_instance;
  }

  var Entities$quot_instance;

  function Entities$quot_getInstance() {
    Entities_initFields();
    return Entities$quot_instance;
  }

  var Entities$amp_instance;

  function Entities$amp_getInstance() {
    Entities_initFields();
    return Entities$amp_instance;
  }

  var Entities$apos_instance;

  function Entities$apos_getInstance() {
    Entities_initFields();
    return Entities$apos_instance;
  }

  var Entities$iexcl_instance;

  function Entities$iexcl_getInstance() {
    Entities_initFields();
    return Entities$iexcl_instance;
  }

  var Entities$cent_instance;

  function Entities$cent_getInstance() {
    Entities_initFields();
    return Entities$cent_instance;
  }

  var Entities$pound_instance;

  function Entities$pound_getInstance() {
    Entities_initFields();
    return Entities$pound_instance;
  }

  var Entities$curren_instance;

  function Entities$curren_getInstance() {
    Entities_initFields();
    return Entities$curren_instance;
  }

  var Entities$yen_instance;

  function Entities$yen_getInstance() {
    Entities_initFields();
    return Entities$yen_instance;
  }

  var Entities$brvbar_instance;

  function Entities$brvbar_getInstance() {
    Entities_initFields();
    return Entities$brvbar_instance;
  }

  var Entities$sect_instance;

  function Entities$sect_getInstance() {
    Entities_initFields();
    return Entities$sect_instance;
  }

  var Entities$uml_instance;

  function Entities$uml_getInstance() {
    Entities_initFields();
    return Entities$uml_instance;
  }

  var Entities$copy_instance;

  function Entities$copy_getInstance() {
    Entities_initFields();
    return Entities$copy_instance;
  }

  var Entities$ordf_instance;

  function Entities$ordf_getInstance() {
    Entities_initFields();
    return Entities$ordf_instance;
  }

  var Entities$laquo_instance;

  function Entities$laquo_getInstance() {
    Entities_initFields();
    return Entities$laquo_instance;
  }

  var Entities$not_instance;

  function Entities$not_getInstance() {
    Entities_initFields();
    return Entities$not_instance;
  }

  var Entities$shy_instance;

  function Entities$shy_getInstance() {
    Entities_initFields();
    return Entities$shy_instance;
  }

  var Entities$reg_instance;

  function Entities$reg_getInstance() {
    Entities_initFields();
    return Entities$reg_instance;
  }

  var Entities$macr_instance;

  function Entities$macr_getInstance() {
    Entities_initFields();
    return Entities$macr_instance;
  }

  var Entities$deg_instance;

  function Entities$deg_getInstance() {
    Entities_initFields();
    return Entities$deg_instance;
  }

  var Entities$plusmn_instance;

  function Entities$plusmn_getInstance() {
    Entities_initFields();
    return Entities$plusmn_instance;
  }

  var Entities$sup2_instance;

  function Entities$sup2_getInstance() {
    Entities_initFields();
    return Entities$sup2_instance;
  }

  var Entities$sup3_instance;

  function Entities$sup3_getInstance() {
    Entities_initFields();
    return Entities$sup3_instance;
  }

  var Entities$acute_instance;

  function Entities$acute_getInstance() {
    Entities_initFields();
    return Entities$acute_instance;
  }

  var Entities$micro_instance;

  function Entities$micro_getInstance() {
    Entities_initFields();
    return Entities$micro_instance;
  }

  var Entities$para_instance;

  function Entities$para_getInstance() {
    Entities_initFields();
    return Entities$para_instance;
  }

  var Entities$middot_instance;

  function Entities$middot_getInstance() {
    Entities_initFields();
    return Entities$middot_instance;
  }

  var Entities$cedil_instance;

  function Entities$cedil_getInstance() {
    Entities_initFields();
    return Entities$cedil_instance;
  }

  var Entities$sup1_instance;

  function Entities$sup1_getInstance() {
    Entities_initFields();
    return Entities$sup1_instance;
  }

  var Entities$ordm_instance;

  function Entities$ordm_getInstance() {
    Entities_initFields();
    return Entities$ordm_instance;
  }

  var Entities$raquo_instance;

  function Entities$raquo_getInstance() {
    Entities_initFields();
    return Entities$raquo_instance;
  }

  var Entities$frac14_instance;

  function Entities$frac14_getInstance() {
    Entities_initFields();
    return Entities$frac14_instance;
  }

  var Entities$frac12_instance;

  function Entities$frac12_getInstance() {
    Entities_initFields();
    return Entities$frac12_instance;
  }

  var Entities$frac34_instance;

  function Entities$frac34_getInstance() {
    Entities_initFields();
    return Entities$frac34_instance;
  }

  var Entities$iquest_instance;

  function Entities$iquest_getInstance() {
    Entities_initFields();
    return Entities$iquest_instance;
  }

  var Entities$Agrave_instance;

  function Entities$Agrave_getInstance() {
    Entities_initFields();
    return Entities$Agrave_instance;
  }

  var Entities$Aacute_instance;

  function Entities$Aacute_getInstance() {
    Entities_initFields();
    return Entities$Aacute_instance;
  }

  var Entities$Acirc_instance;

  function Entities$Acirc_getInstance() {
    Entities_initFields();
    return Entities$Acirc_instance;
  }

  var Entities$Atilde_instance;

  function Entities$Atilde_getInstance() {
    Entities_initFields();
    return Entities$Atilde_instance;
  }

  var Entities$Auml_instance;

  function Entities$Auml_getInstance() {
    Entities_initFields();
    return Entities$Auml_instance;
  }

  var Entities$Aring_instance;

  function Entities$Aring_getInstance() {
    Entities_initFields();
    return Entities$Aring_instance;
  }

  var Entities$AElig_instance;

  function Entities$AElig_getInstance() {
    Entities_initFields();
    return Entities$AElig_instance;
  }

  var Entities$Ccedil_instance;

  function Entities$Ccedil_getInstance() {
    Entities_initFields();
    return Entities$Ccedil_instance;
  }

  var Entities$Egrave_instance;

  function Entities$Egrave_getInstance() {
    Entities_initFields();
    return Entities$Egrave_instance;
  }

  var Entities$Eacute_instance;

  function Entities$Eacute_getInstance() {
    Entities_initFields();
    return Entities$Eacute_instance;
  }

  var Entities$Ecirc_instance;

  function Entities$Ecirc_getInstance() {
    Entities_initFields();
    return Entities$Ecirc_instance;
  }

  var Entities$Euml_instance;

  function Entities$Euml_getInstance() {
    Entities_initFields();
    return Entities$Euml_instance;
  }

  var Entities$Igrave_instance;

  function Entities$Igrave_getInstance() {
    Entities_initFields();
    return Entities$Igrave_instance;
  }

  var Entities$Iacute_instance;

  function Entities$Iacute_getInstance() {
    Entities_initFields();
    return Entities$Iacute_instance;
  }

  var Entities$Icirc_instance;

  function Entities$Icirc_getInstance() {
    Entities_initFields();
    return Entities$Icirc_instance;
  }

  var Entities$Iuml_instance;

  function Entities$Iuml_getInstance() {
    Entities_initFields();
    return Entities$Iuml_instance;
  }

  var Entities$ETH_instance;

  function Entities$ETH_getInstance() {
    Entities_initFields();
    return Entities$ETH_instance;
  }

  var Entities$Ntilde_instance;

  function Entities$Ntilde_getInstance() {
    Entities_initFields();
    return Entities$Ntilde_instance;
  }

  var Entities$Ograve_instance;

  function Entities$Ograve_getInstance() {
    Entities_initFields();
    return Entities$Ograve_instance;
  }

  var Entities$Oacute_instance;

  function Entities$Oacute_getInstance() {
    Entities_initFields();
    return Entities$Oacute_instance;
  }

  var Entities$Ocirc_instance;

  function Entities$Ocirc_getInstance() {
    Entities_initFields();
    return Entities$Ocirc_instance;
  }

  var Entities$Otilde_instance;

  function Entities$Otilde_getInstance() {
    Entities_initFields();
    return Entities$Otilde_instance;
  }

  var Entities$Ouml_instance;

  function Entities$Ouml_getInstance() {
    Entities_initFields();
    return Entities$Ouml_instance;
  }

  var Entities$times_instance;

  function Entities$times_getInstance() {
    Entities_initFields();
    return Entities$times_instance;
  }

  var Entities$Oslash_instance;

  function Entities$Oslash_getInstance() {
    Entities_initFields();
    return Entities$Oslash_instance;
  }

  var Entities$Ugrave_instance;

  function Entities$Ugrave_getInstance() {
    Entities_initFields();
    return Entities$Ugrave_instance;
  }

  var Entities$Uacute_instance;

  function Entities$Uacute_getInstance() {
    Entities_initFields();
    return Entities$Uacute_instance;
  }

  var Entities$Ucirc_instance;

  function Entities$Ucirc_getInstance() {
    Entities_initFields();
    return Entities$Ucirc_instance;
  }

  var Entities$Uuml_instance;

  function Entities$Uuml_getInstance() {
    Entities_initFields();
    return Entities$Uuml_instance;
  }

  var Entities$Yacute_instance;

  function Entities$Yacute_getInstance() {
    Entities_initFields();
    return Entities$Yacute_instance;
  }

  var Entities$THORN_instance;

  function Entities$THORN_getInstance() {
    Entities_initFields();
    return Entities$THORN_instance;
  }

  var Entities$szlig_instance;

  function Entities$szlig_getInstance() {
    Entities_initFields();
    return Entities$szlig_instance;
  }

  var Entities$agrave_instance;

  function Entities$agrave_getInstance() {
    Entities_initFields();
    return Entities$agrave_instance;
  }

  var Entities$aacute_instance;

  function Entities$aacute_getInstance() {
    Entities_initFields();
    return Entities$aacute_instance;
  }

  var Entities$acirc_instance;

  function Entities$acirc_getInstance() {
    Entities_initFields();
    return Entities$acirc_instance;
  }

  var Entities$atilde_instance;

  function Entities$atilde_getInstance() {
    Entities_initFields();
    return Entities$atilde_instance;
  }

  var Entities$auml_instance;

  function Entities$auml_getInstance() {
    Entities_initFields();
    return Entities$auml_instance;
  }

  var Entities$aring_instance;

  function Entities$aring_getInstance() {
    Entities_initFields();
    return Entities$aring_instance;
  }

  var Entities$aelig_instance;

  function Entities$aelig_getInstance() {
    Entities_initFields();
    return Entities$aelig_instance;
  }

  var Entities$ccedil_instance;

  function Entities$ccedil_getInstance() {
    Entities_initFields();
    return Entities$ccedil_instance;
  }

  var Entities$egrave_instance;

  function Entities$egrave_getInstance() {
    Entities_initFields();
    return Entities$egrave_instance;
  }

  var Entities$eacute_instance;

  function Entities$eacute_getInstance() {
    Entities_initFields();
    return Entities$eacute_instance;
  }

  var Entities$ecirc_instance;

  function Entities$ecirc_getInstance() {
    Entities_initFields();
    return Entities$ecirc_instance;
  }

  var Entities$euml_instance;

  function Entities$euml_getInstance() {
    Entities_initFields();
    return Entities$euml_instance;
  }

  var Entities$igrave_instance;

  function Entities$igrave_getInstance() {
    Entities_initFields();
    return Entities$igrave_instance;
  }

  var Entities$iacute_instance;

  function Entities$iacute_getInstance() {
    Entities_initFields();
    return Entities$iacute_instance;
  }

  var Entities$icirc_instance;

  function Entities$icirc_getInstance() {
    Entities_initFields();
    return Entities$icirc_instance;
  }

  var Entities$iuml_instance;

  function Entities$iuml_getInstance() {
    Entities_initFields();
    return Entities$iuml_instance;
  }

  var Entities$eth_instance;

  function Entities$eth_getInstance() {
    Entities_initFields();
    return Entities$eth_instance;
  }

  var Entities$ntilde_instance;

  function Entities$ntilde_getInstance() {
    Entities_initFields();
    return Entities$ntilde_instance;
  }

  var Entities$ograve_instance;

  function Entities$ograve_getInstance() {
    Entities_initFields();
    return Entities$ograve_instance;
  }

  var Entities$oacute_instance;

  function Entities$oacute_getInstance() {
    Entities_initFields();
    return Entities$oacute_instance;
  }

  var Entities$ocirc_instance;

  function Entities$ocirc_getInstance() {
    Entities_initFields();
    return Entities$ocirc_instance;
  }

  var Entities$otilde_instance;

  function Entities$otilde_getInstance() {
    Entities_initFields();
    return Entities$otilde_instance;
  }

  var Entities$ouml_instance;

  function Entities$ouml_getInstance() {
    Entities_initFields();
    return Entities$ouml_instance;
  }

  var Entities$divide_instance;

  function Entities$divide_getInstance() {
    Entities_initFields();
    return Entities$divide_instance;
  }

  var Entities$oslash_instance;

  function Entities$oslash_getInstance() {
    Entities_initFields();
    return Entities$oslash_instance;
  }

  var Entities$ugrave_instance;

  function Entities$ugrave_getInstance() {
    Entities_initFields();
    return Entities$ugrave_instance;
  }

  var Entities$uacute_instance;

  function Entities$uacute_getInstance() {
    Entities_initFields();
    return Entities$uacute_instance;
  }

  var Entities$ucirc_instance;

  function Entities$ucirc_getInstance() {
    Entities_initFields();
    return Entities$ucirc_instance;
  }

  var Entities$uuml_instance;

  function Entities$uuml_getInstance() {
    Entities_initFields();
    return Entities$uuml_instance;
  }

  var Entities$yacute_instance;

  function Entities$yacute_getInstance() {
    Entities_initFields();
    return Entities$yacute_instance;
  }

  var Entities$thorn_instance;

  function Entities$thorn_getInstance() {
    Entities_initFields();
    return Entities$thorn_instance;
  }

  var Entities$yuml_instance;

  function Entities$yuml_getInstance() {
    Entities_initFields();
    return Entities$yuml_instance;
  }

  Object.defineProperty(Entities.prototype, 'text', {
    get: function() {
      return '&' + this.toString() + ';';
    }
  });
  Entities.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Entities',
    interfaces: [Enum]
  };

  function Entities$values() {
    return [Entities$nbsp_getInstance(), Entities$lt_getInstance(), Entities$gt_getInstance(), Entities$quot_getInstance(), Entities$amp_getInstance(), Entities$apos_getInstance(), Entities$iexcl_getInstance(), Entities$cent_getInstance(), Entities$pound_getInstance(), Entities$curren_getInstance(), Entities$yen_getInstance(), Entities$brvbar_getInstance(), Entities$sect_getInstance(), Entities$uml_getInstance(), Entities$copy_getInstance(), Entities$ordf_getInstance(), Entities$laquo_getInstance(), Entities$not_getInstance(), Entities$shy_getInstance(), Entities$reg_getInstance(), Entities$macr_getInstance(), Entities$deg_getInstance(), Entities$plusmn_getInstance(), Entities$sup2_getInstance(), Entities$sup3_getInstance(), Entities$acute_getInstance(), Entities$micro_getInstance(), Entities$para_getInstance(), Entities$middot_getInstance(), Entities$cedil_getInstance(), Entities$sup1_getInstance(), Entities$ordm_getInstance(), Entities$raquo_getInstance(), Entities$frac14_getInstance(), Entities$frac12_getInstance(), Entities$frac34_getInstance(), Entities$iquest_getInstance(), Entities$Agrave_getInstance(), Entities$Aacute_getInstance(), Entities$Acirc_getInstance(), Entities$Atilde_getInstance(), Entities$Auml_getInstance(), Entities$Aring_getInstance(), Entities$AElig_getInstance(), Entities$Ccedil_getInstance(), Entities$Egrave_getInstance(), Entities$Eacute_getInstance(), Entities$Ecirc_getInstance(), Entities$Euml_getInstance(), Entities$Igrave_getInstance(), Entities$Iacute_getInstance(), Entities$Icirc_getInstance(), Entities$Iuml_getInstance(), Entities$ETH_getInstance(), Entities$Ntilde_getInstance(), Entities$Ograve_getInstance(), Entities$Oacute_getInstance(), Entities$Ocirc_getInstance(), Entities$Otilde_getInstance(), Entities$Ouml_getInstance(), Entities$times_getInstance(), Entities$Oslash_getInstance(), Entities$Ugrave_getInstance(), Entities$Uacute_getInstance(), Entities$Ucirc_getInstance(), Entities$Uuml_getInstance(), Entities$Yacute_getInstance(), Entities$THORN_getInstance(), Entities$szlig_getInstance(), Entities$agrave_getInstance(), Entities$aacute_getInstance(), Entities$acirc_getInstance(), Entities$atilde_getInstance(), Entities$auml_getInstance(), Entities$aring_getInstance(), Entities$aelig_getInstance(), Entities$ccedil_getInstance(), Entities$egrave_getInstance(), Entities$eacute_getInstance(), Entities$ecirc_getInstance(), Entities$euml_getInstance(), Entities$igrave_getInstance(), Entities$iacute_getInstance(), Entities$icirc_getInstance(), Entities$iuml_getInstance(), Entities$eth_getInstance(), Entities$ntilde_getInstance(), Entities$ograve_getInstance(), Entities$oacute_getInstance(), Entities$ocirc_getInstance(), Entities$otilde_getInstance(), Entities$ouml_getInstance(), Entities$divide_getInstance(), Entities$oslash_getInstance(), Entities$ugrave_getInstance(), Entities$uacute_getInstance(), Entities$ucirc_getInstance(), Entities$uuml_getInstance(), Entities$yacute_getInstance(), Entities$thorn_getInstance(), Entities$yuml_getInstance()];
  }

  Entities.values = Entities$values;

  function Entities$valueOf(name) {
    switch (name) {
      case 'nbsp':
        return Entities$nbsp_getInstance();
      case 'lt':
        return Entities$lt_getInstance();
      case 'gt':
        return Entities$gt_getInstance();
      case 'quot':
        return Entities$quot_getInstance();
      case 'amp':
        return Entities$amp_getInstance();
      case 'apos':
        return Entities$apos_getInstance();
      case 'iexcl':
        return Entities$iexcl_getInstance();
      case 'cent':
        return Entities$cent_getInstance();
      case 'pound':
        return Entities$pound_getInstance();
      case 'curren':
        return Entities$curren_getInstance();
      case 'yen':
        return Entities$yen_getInstance();
      case 'brvbar':
        return Entities$brvbar_getInstance();
      case 'sect':
        return Entities$sect_getInstance();
      case 'uml':
        return Entities$uml_getInstance();
      case 'copy':
        return Entities$copy_getInstance();
      case 'ordf':
        return Entities$ordf_getInstance();
      case 'laquo':
        return Entities$laquo_getInstance();
      case 'not':
        return Entities$not_getInstance();
      case 'shy':
        return Entities$shy_getInstance();
      case 'reg':
        return Entities$reg_getInstance();
      case 'macr':
        return Entities$macr_getInstance();
      case 'deg':
        return Entities$deg_getInstance();
      case 'plusmn':
        return Entities$plusmn_getInstance();
      case 'sup2':
        return Entities$sup2_getInstance();
      case 'sup3':
        return Entities$sup3_getInstance();
      case 'acute':
        return Entities$acute_getInstance();
      case 'micro':
        return Entities$micro_getInstance();
      case 'para':
        return Entities$para_getInstance();
      case 'middot':
        return Entities$middot_getInstance();
      case 'cedil':
        return Entities$cedil_getInstance();
      case 'sup1':
        return Entities$sup1_getInstance();
      case 'ordm':
        return Entities$ordm_getInstance();
      case 'raquo':
        return Entities$raquo_getInstance();
      case 'frac14':
        return Entities$frac14_getInstance();
      case 'frac12':
        return Entities$frac12_getInstance();
      case 'frac34':
        return Entities$frac34_getInstance();
      case 'iquest':
        return Entities$iquest_getInstance();
      case 'Agrave':
        return Entities$Agrave_getInstance();
      case 'Aacute':
        return Entities$Aacute_getInstance();
      case 'Acirc':
        return Entities$Acirc_getInstance();
      case 'Atilde':
        return Entities$Atilde_getInstance();
      case 'Auml':
        return Entities$Auml_getInstance();
      case 'Aring':
        return Entities$Aring_getInstance();
      case 'AElig':
        return Entities$AElig_getInstance();
      case 'Ccedil':
        return Entities$Ccedil_getInstance();
      case 'Egrave':
        return Entities$Egrave_getInstance();
      case 'Eacute':
        return Entities$Eacute_getInstance();
      case 'Ecirc':
        return Entities$Ecirc_getInstance();
      case 'Euml':
        return Entities$Euml_getInstance();
      case 'Igrave':
        return Entities$Igrave_getInstance();
      case 'Iacute':
        return Entities$Iacute_getInstance();
      case 'Icirc':
        return Entities$Icirc_getInstance();
      case 'Iuml':
        return Entities$Iuml_getInstance();
      case 'ETH':
        return Entities$ETH_getInstance();
      case 'Ntilde':
        return Entities$Ntilde_getInstance();
      case 'Ograve':
        return Entities$Ograve_getInstance();
      case 'Oacute':
        return Entities$Oacute_getInstance();
      case 'Ocirc':
        return Entities$Ocirc_getInstance();
      case 'Otilde':
        return Entities$Otilde_getInstance();
      case 'Ouml':
        return Entities$Ouml_getInstance();
      case 'times':
        return Entities$times_getInstance();
      case 'Oslash':
        return Entities$Oslash_getInstance();
      case 'Ugrave':
        return Entities$Ugrave_getInstance();
      case 'Uacute':
        return Entities$Uacute_getInstance();
      case 'Ucirc':
        return Entities$Ucirc_getInstance();
      case 'Uuml':
        return Entities$Uuml_getInstance();
      case 'Yacute':
        return Entities$Yacute_getInstance();
      case 'THORN':
        return Entities$THORN_getInstance();
      case 'szlig':
        return Entities$szlig_getInstance();
      case 'agrave':
        return Entities$agrave_getInstance();
      case 'aacute':
        return Entities$aacute_getInstance();
      case 'acirc':
        return Entities$acirc_getInstance();
      case 'atilde':
        return Entities$atilde_getInstance();
      case 'auml':
        return Entities$auml_getInstance();
      case 'aring':
        return Entities$aring_getInstance();
      case 'aelig':
        return Entities$aelig_getInstance();
      case 'ccedil':
        return Entities$ccedil_getInstance();
      case 'egrave':
        return Entities$egrave_getInstance();
      case 'eacute':
        return Entities$eacute_getInstance();
      case 'ecirc':
        return Entities$ecirc_getInstance();
      case 'euml':
        return Entities$euml_getInstance();
      case 'igrave':
        return Entities$igrave_getInstance();
      case 'iacute':
        return Entities$iacute_getInstance();
      case 'icirc':
        return Entities$icirc_getInstance();
      case 'iuml':
        return Entities$iuml_getInstance();
      case 'eth':
        return Entities$eth_getInstance();
      case 'ntilde':
        return Entities$ntilde_getInstance();
      case 'ograve':
        return Entities$ograve_getInstance();
      case 'oacute':
        return Entities$oacute_getInstance();
      case 'ocirc':
        return Entities$ocirc_getInstance();
      case 'otilde':
        return Entities$otilde_getInstance();
      case 'ouml':
        return Entities$ouml_getInstance();
      case 'divide':
        return Entities$divide_getInstance();
      case 'oslash':
        return Entities$oslash_getInstance();
      case 'ugrave':
        return Entities$ugrave_getInstance();
      case 'uacute':
        return Entities$uacute_getInstance();
      case 'ucirc':
        return Entities$ucirc_getInstance();
      case 'uuml':
        return Entities$uuml_getInstance();
      case 'yacute':
        return Entities$yacute_getInstance();
      case 'thorn':
        return Entities$thorn_getInstance();
      case 'yuml':
        return Entities$yuml_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.Entities.' + name);
    }
  }

  Entities.valueOf_61zpoe$ = Entities$valueOf;

  function styleLink$lambda(closure$url) {
    return function($receiver_17) {
      $receiver_17.rel = LinkRel_getInstance().stylesheet;
      $receiver_17.type = LinkType_getInstance().textCss;
      $receiver_17.href = closure$url;
    };
  }

  function styleLink($receiver_17, url) {
    link_0($receiver_17, void 0, void 0, void 0, styleLink$lambda(url));
  }

  function get_br($receiver_17) {
    var tag = new BR(emptyMap_0(), $receiver_17.consumer);
    $receiver_17.consumer.onTagStart_tkgjla$(tag);
    $receiver_17.consumer.onTagEnd_tkgjla$(tag);
  }

  function TraceConsumer(downstream, println) {
    this.downstream = downstream;
    this.println = println;
    this.id_0 = 'ID-' + currentTimeMillis().modulo(Kotlin.Long.fromInt(16384));
    this.path_0 = ArrayList_init(1024);
  }

  TraceConsumer.prototype.onTagStart_tkgjla$ = function(tag) {
    this.downstream.onTagStart_tkgjla$(tag);
    this.path_0.add_11rb$(tag.tagName);
    this.println('[' + this.id_0 + ']  open ' + tag.tagName + ' path: ' + joinToString(this.path_0, ' > '));
  };
  TraceConsumer.prototype.onTagEnd_tkgjla$ = function(tag) {
    this.downstream.onTagEnd_tkgjla$(tag);
    this.path_0.removeAt_za3lpa$(get_lastIndex(this.path_0));
    this.println('[' + this.id_0 + '] close ' + tag.tagName + ' path: ' + joinToString(this.path_0, ' > '));
  };
  TraceConsumer.prototype.onTagAttributeChange_5n2z71$ = function(tag, attribute, value) {
    this.downstream.onTagAttributeChange_5n2z71$(tag, attribute, value);
    this.println('[' + this.id_0 + ']     ' + tag.tagName + '.' + attribute + ' changed to ' + Kotlin.toString(value));
  };
  TraceConsumer.prototype.onTagError_cjwpn3$ = function(tag, exception) {
    this.println('[' + this.id_0 + '] exception in ' + tag.tagName + ': ' + Kotlin.toString(exception.message));
    this.downstream.onTagError_cjwpn3$(tag, exception);
  };
  TraceConsumer.prototype.finalize = function() {
    var v = this.downstream.finalize();
    this.println('[' + this.id_0 + '] finalized: ' + Kotlin.toString(v));
    return v;
  };
  TraceConsumer.prototype.onTagContent_6bul2c$ = function(content) {
    return this.downstream.onTagContent_6bul2c$(content);
  };
  TraceConsumer.prototype.onTagContentEntity_ws8or7$ = function(entity) {
    return this.downstream.onTagContentEntity_ws8or7$(entity);
  };
  TraceConsumer.prototype.onTagContentUnsafe_kntra7$ = function(block) {
    return this.downstream.onTagContentUnsafe_kntra7$(block);
  };
  TraceConsumer.prototype.onTagEvent_azi6uv$ = function(tag, event, value) {
    return this.downstream.onTagEvent_azi6uv$(tag, event, value);
  };
  TraceConsumer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TraceConsumer',
    interfaces: [TagConsumer]
  };

  function trace_0($receiver_17, println) {
    return new TraceConsumer($receiver_17, println);
  }

  function HTMLTag(tagName, consumer, initialAttributes, namespace, inlineTag, emptyTag) {
    if (namespace === void 0)
      namespace = null;
    this.tagName_8alqev$_0 = tagName;
    this.consumer_8alqev$_0 = consumer;
    this.namespace_8alqev$_0 = namespace;
    this.inlineTag_8alqev$_0 = inlineTag;
    this.emptyTag_8alqev$_0 = emptyTag;
    this.attributes_8alqev$_0 = new DelegatingMap(initialAttributes, this, HTMLTag$attributes$lambda(this));
  }

  Object.defineProperty(HTMLTag.prototype, 'tagName', {
    get: function() {
      return this.tagName_8alqev$_0;
    }
  });
  Object.defineProperty(HTMLTag.prototype, 'consumer', {
    get: function() {
      return this.consumer_8alqev$_0;
    }
  });
  Object.defineProperty(HTMLTag.prototype, 'namespace', {
    get: function() {
      return this.namespace_8alqev$_0;
    }
  });
  Object.defineProperty(HTMLTag.prototype, 'inlineTag', {
    get: function() {
      return this.inlineTag_8alqev$_0;
    }
  });
  Object.defineProperty(HTMLTag.prototype, 'emptyTag', {
    get: function() {
      return this.emptyTag_8alqev$_0;
    }
  });
  Object.defineProperty(HTMLTag.prototype, 'attributes', {
    get: function() {
      return this.attributes_8alqev$_0;
    }
  });
  Object.defineProperty(HTMLTag.prototype, 'attributesEntries', {
    get: function() {
      return this.attributes.immutableEntries;
    }
  });

  function HTMLTag$attributes$lambda(this$HTMLTag) {
    return function() {
      return this$HTMLTag.consumer;
    };
  }

  HTMLTag.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HTMLTag',
    interfaces: [Tag]
  };

  function FinalizeConsumer(downstream, block) {
    this.downstream = downstream;
    this.block = block;
    this.level_0 = 0;
  }

  FinalizeConsumer.prototype.onTagStart_tkgjla$ = function(tag) {
    this.downstream.onTagStart_tkgjla$(tag);
    this.level_0 = this.level_0 + 1 | 0;
  };
  FinalizeConsumer.prototype.onTagEnd_tkgjla$ = function(tag) {
    this.downstream.onTagEnd_tkgjla$(tag);
    this.level_0 = this.level_0 - 1 | 0;
  };
  FinalizeConsumer.prototype.onTagAttributeChange_5n2z71$ = function(tag, attribute, value) {
    this.downstream.onTagAttributeChange_5n2z71$(tag, attribute, value);
  };
  FinalizeConsumer.prototype.onTagEvent_azi6uv$ = function(tag, event, value) {
    this.downstream.onTagEvent_azi6uv$(tag, event, value);
  };
  FinalizeConsumer.prototype.onTagContent_6bul2c$ = function(content) {
    this.downstream.onTagContent_6bul2c$(content);
  };
  FinalizeConsumer.prototype.onTagContentEntity_ws8or7$ = function(entity) {
    this.downstream.onTagContentEntity_ws8or7$(entity);
  };
  FinalizeConsumer.prototype.onTagContentUnsafe_kntra7$ = function(block) {
    this.downstream.onTagContentUnsafe_kntra7$(block);
  };
  FinalizeConsumer.prototype.onTagError_cjwpn3$ = function(tag, exception) {
    this.downstream.onTagError_cjwpn3$(tag, exception);
  };
  FinalizeConsumer.prototype.finalize = function() {
    return this.block(this.downstream.finalize(), this.level_0 > 0);
  };
  FinalizeConsumer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FinalizeConsumer',
    interfaces: [TagConsumer]
  };

  function onFinalize$lambda(closure$block) {
    return function(to_0, partial) {
      closure$block(to_0, partial);
      return to_0;
    };
  }

  function onFinalize($receiver_17, block) {
    return new FinalizeConsumer($receiver_17, onFinalize$lambda(block));
  }

  function onFinalizeMap($receiver_17, block) {
    return new FinalizeConsumer($receiver_17, block);
  }

  function TagConsumer() {
  }

  TagConsumer.prototype.onTagError_cjwpn3$ = function(tag, exception) {
    throw exception;
  };
  TagConsumer.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'TagConsumer',
    interfaces: []
  };

  function Tag() {
  }

  Tag.prototype.unaryPlus_lvwjq6$ = function($receiver_17) {
    this.consumer.onTagContentEntity_ws8or7$($receiver_17);
  };
  Tag.prototype.unaryPlus_pdl1vz$ = function($receiver_17) {
    this.consumer.onTagContent_6bul2c$($receiver_17);
  };
  Tag.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Tag',
    interfaces: []
  };

  function Unsafe() {
  }

  Unsafe.prototype.unaryPlus_lvwjq6$ = function($receiver_17) {
    this.unaryPlus_pdl1vz$($receiver_17.text);
  };
  Unsafe.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Unsafe',
    interfaces: []
  };

  function AttributeEnum() {
  }

  AttributeEnum.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'AttributeEnum',
    interfaces: []
  };

  function visit($receiver_17, block) {
    $receiver_17.consumer.onTagStart_tkgjla$($receiver_17);
    try {
      block($receiver_17);
    }
    catch (err) {
      if (Kotlin.isType(err, Throwable)) {
        $receiver_17.consumer.onTagError_cjwpn3$($receiver_17, err);
      }
      else
        throw err;
    }
    finally {
      $receiver_17.consumer.onTagEnd_tkgjla$($receiver_17);
    }
  }

  function visitAndFinalize($receiver_17, consumer, block) {
    if ($receiver_17.consumer !== consumer) {
      throw new IllegalArgumentException('Wrong exception');
    }
    visit($receiver_17, block);
    return consumer.finalize();
  }

  function attributesMapOf_1() {
    return emptyMap;
  }

  function attributesMapOf_0(key, value) {
    if (value == null)
      return emptyMap;
    else
      return singletonMapOf(key, value);
  }

  function attributesMapOf(pairs) {
    var tmp$_17;
    var result = null;
    tmp$_17 = step(new IntRange(0, pairs.length - 1 | 0), 2).iterator();
    while (tmp$_17.hasNext()) {
      var i_2 = tmp$_17.next();
      var k = pairs[i_2];
      var v = pairs[i_2 + 1 | 0];
      if (k != null && v != null) {
        if (result == null) {
          result = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
        }
        result.put_xwzc9p$(k, v);
      }
    }
    return result != null ? result : emptyMap;
  }

  function singletonMapOf(key, value) {
    return new SingletonStringMap(key, value);
  }

  function unsafe($receiver_17, block) {
    $receiver_17.consumer.onTagContentUnsafe_kntra7$(block);
  }

  var emptyMap;

  function DefaultUnsafe() {
    this.sb_0 = new StringBuilder();
  }

  DefaultUnsafe.prototype.unaryPlus_pdl1vz$ = function($receiver_17) {
    this.sb_0.append_gw00v9$($receiver_17);
  };
  DefaultUnsafe.prototype.toString = function() {
    return this.sb_0.toString();
  };
  DefaultUnsafe.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DefaultUnsafe',
    interfaces: [Unsafe]
  };

  function HtmlTagMarker() {
  }

  HtmlTagMarker.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HtmlTagMarker',
    interfaces: [Annotation]
  };

  function SingletonStringMap(key, value) {
    this.key_cuzocu$_0 = key;
    this.value_cuzocu$_0 = value;
  }

  Object.defineProperty(SingletonStringMap.prototype, 'key', {
    get: function() {
      return this.key_cuzocu$_0;
    }
  });
  Object.defineProperty(SingletonStringMap.prototype, 'value', {
    get: function() {
      return this.value_cuzocu$_0;
    }
  });
  Object.defineProperty(SingletonStringMap.prototype, 'entries', {
    get: function() {
      return setOf(this);
    }
  });
  Object.defineProperty(SingletonStringMap.prototype, 'keys', {
    get: function() {
      return setOf(this.key);
    }
  });
  Object.defineProperty(SingletonStringMap.prototype, 'size', {
    get: function() {
      return 1;
    }
  });
  Object.defineProperty(SingletonStringMap.prototype, 'values', {
    get: function() {
      return listOf_0(this.value);
    }
  });
  SingletonStringMap.prototype.containsKey_11rb$ = function(key) {
    return Kotlin.equals(key, this.key);
  };
  SingletonStringMap.prototype.containsValue_11rc$ = function(value) {
    return Kotlin.equals(value, this.value);
  };
  SingletonStringMap.prototype.get_11rb$ = function(key) {
    return Kotlin.equals(key, this.key) ? this.value : null;
  };
  SingletonStringMap.prototype.isEmpty = function() {
    return false;
  };
  SingletonStringMap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SingletonStringMap',
    interfaces: [Map$Entry, Map]
  };
  SingletonStringMap.prototype.component1 = function() {
    return this.key;
  };
  SingletonStringMap.prototype.component2 = function() {
    return this.value;
  };
  SingletonStringMap.prototype.copy_puj7f4$ = function(key, value) {
    return new SingletonStringMap(key === void 0 ? this.key : key, value === void 0 ? this.value : value);
  };
  SingletonStringMap.prototype.toString = function() {
    return 'SingletonStringMap(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  SingletonStringMap.prototype.hashCode = function() {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  SingletonStringMap.prototype.equals = function(other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value)))));
  };

  function PredicateResults() {
    PredicateResults_instance = this;
    this.PASS = PredicateResult$PASS_getInstance();
    this.SKIP = PredicateResult$SKIP_getInstance();
    this.DROP = PredicateResult$DROP_getInstance();
  }

  PredicateResults.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'PredicateResults',
    interfaces: []
  };
  var PredicateResults_instance = null;

  function PredicateResults_getInstance() {
    if (PredicateResults_instance === null) {
      new PredicateResults();
    }
    return PredicateResults_instance;
  }

  function PredicateResult(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }

  function PredicateResult_initFields() {
    PredicateResult_initFields = function() {
    };
    PredicateResult$PASS_instance = new PredicateResult('PASS', 0);
    PredicateResult$SKIP_instance = new PredicateResult('SKIP', 1);
    PredicateResult$DROP_instance = new PredicateResult('DROP', 2);
  }

  var PredicateResult$PASS_instance;

  function PredicateResult$PASS_getInstance() {
    PredicateResult_initFields();
    return PredicateResult$PASS_instance;
  }

  var PredicateResult$SKIP_instance;

  function PredicateResult$SKIP_getInstance() {
    PredicateResult_initFields();
    return PredicateResult$SKIP_instance;
  }

  var PredicateResult$DROP_instance;

  function PredicateResult$DROP_getInstance() {
    PredicateResult_initFields();
    return PredicateResult$DROP_instance;
  }

  PredicateResult.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PredicateResult',
    interfaces: [Enum]
  };

  function PredicateResult$values() {
    return [PredicateResult$PASS_getInstance(), PredicateResult$SKIP_getInstance(), PredicateResult$DROP_getInstance()];
  }

  PredicateResult.values = PredicateResult$values;

  function PredicateResult$valueOf(name) {
    switch (name) {
      case 'PASS':
        return PredicateResult$PASS_getInstance();
      case 'SKIP':
        return PredicateResult$SKIP_getInstance();
      case 'DROP':
        return PredicateResult$DROP_getInstance();
      default:
        Kotlin.throwISE('No enum constant kotlinx.html.consumers.PredicateResult.' + name);
    }
  }

  PredicateResult.valueOf_61zpoe$ = PredicateResult$valueOf;

  function FilterTagConsumer(downstream, predicate) {
    this.downstream = downstream;
    this.predicate = predicate;
    this.currentLevel_0 = 0;
    this.skippedLevels_0 = HashSet_init();
    this.dropLevel_0 = null;
  }

  FilterTagConsumer.prototype.onTagStart_tkgjla$ = function(tag) {
    var tmp$_17;
    this.currentLevel_0 = this.currentLevel_0 + 1 | 0;
    if (this.dropLevel_0 == null) {
      tmp$_17 = this.predicate(tag);
      if (Kotlin.equals(tmp$_17, PredicateResult$PASS_getInstance()))
        this.downstream.onTagStart_tkgjla$(tag);
      else if (Kotlin.equals(tmp$_17, PredicateResult$SKIP_getInstance()))
        this.skippedLevels_0.add_11rb$(this.currentLevel_0);
      else if (Kotlin.equals(tmp$_17, PredicateResult$DROP_getInstance()))
        this.dropLevel_0 = this.currentLevel_0;
      else
        Kotlin.noWhenBranchMatched();
    }
  };
  FilterTagConsumer.prototype.onTagAttributeChange_5n2z71$ = function(tag, attribute, value) {
    throw new UnsupportedOperationException("this filter doesn't support attribute change");
  };
  FilterTagConsumer.prototype.onTagEvent_azi6uv$ = function(tag, event, value) {
    throw new UnsupportedOperationException("this filter doesn't support attribute change");
  };
  FilterTagConsumer.prototype.onTagEnd_tkgjla$ = function(tag) {
    if (this.canPassCurrentLevel_0()) {
      this.downstream.onTagEnd_tkgjla$(tag);
    }
    this.skippedLevels_0.remove_11rb$(this.currentLevel_0);
    if (this.dropLevel_0 === this.currentLevel_0) {
      this.dropLevel_0 = null;
    }
    this.currentLevel_0 = this.currentLevel_0 - 1 | 0;
  };
  FilterTagConsumer.prototype.onTagContent_6bul2c$ = function(content) {
    if (this.canPassCurrentLevel_0()) {
      this.downstream.onTagContent_6bul2c$(content);
    }
  };
  FilterTagConsumer.prototype.onTagContentEntity_ws8or7$ = function(entity) {
    if (this.canPassCurrentLevel_0()) {
      this.downstream.onTagContentEntity_ws8or7$(entity);
    }
  };
  FilterTagConsumer.prototype.onTagContentUnsafe_kntra7$ = function(block) {
    if (this.canPassCurrentLevel_0()) {
      this.downstream.onTagContentUnsafe_kntra7$(block);
    }
  };
  FilterTagConsumer.prototype.canPassCurrentLevel_0 = function() {
    return this.dropLevel_0 == null && !this.skippedLevels_0.contains_11rb$(this.currentLevel_0);
  };
  FilterTagConsumer.prototype.onTagError_cjwpn3$ = function(tag, exception) {
    if (this.canPassCurrentLevel_0()) {
      this.downstream.onTagError_cjwpn3$(tag, exception);
    }
  };
  FilterTagConsumer.prototype.finalize = function() {
    return this.downstream.finalize();
  };
  FilterTagConsumer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FilterTagConsumer',
    interfaces: [TagConsumer]
  };

  function filter$lambda(closure$predicate) {
    return function(it) {
      return closure$predicate(PredicateResults_getInstance(), it);
    };
  }

  function filter_0($receiver_17, predicate) {
    return delayed(new FilterTagConsumer($receiver_17, filter$lambda(predicate)));
  }

  JSDOMBuilder.prototype.onTagError_cjwpn3$ = TagConsumer.prototype.onTagError_cjwpn3$;
  DelegatingMap.prototype.remove_xwzc9p$ = MutableMap.prototype.remove_xwzc9p$;
  DelegatingMap.prototype.getOrDefault_xwzc9p$ = MutableMap.prototype.getOrDefault_xwzc9p$;
  StringEncoder.prototype.empty_l5rr1g$ = AttributeEncoder.prototype.empty_l5rr1g$;
  BooleanEncoder.prototype.empty_l5rr1g$ = AttributeEncoder.prototype.empty_l5rr1g$;
  TickerEncoder.prototype.empty_l5rr1g$ = AttributeEncoder.prototype.empty_l5rr1g$;
  EnumEncoder.prototype.empty_l5rr1g$ = AttributeEncoder.prototype.empty_l5rr1g$;
  HTMLStreamBuilder$UnsafeImpl$ObjectLiteral.prototype.unaryPlus_lvwjq6$ = Unsafe.prototype.unaryPlus_lvwjq6$;
  HTMLStreamBuilder.prototype.onTagError_cjwpn3$ = TagConsumer.prototype.onTagError_cjwpn3$;
  HTMLTag.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  HTMLTag.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  FlowOrHeadingContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  FlowOrHeadingContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  FlowOrPhrasingOrMetaDataContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  FlowOrPhrasingOrMetaDataContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  FlowOrMetaDataContent.prototype.unaryPlus_lvwjq6$ = FlowOrPhrasingOrMetaDataContent.prototype.unaryPlus_lvwjq6$;
  FlowOrMetaDataContent.prototype.unaryPlus_pdl1vz$ = FlowOrPhrasingOrMetaDataContent.prototype.unaryPlus_pdl1vz$;
  FlowOrInteractiveOrPhrasingContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  FlowOrInteractiveOrPhrasingContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  FlowOrInteractiveContent.prototype.unaryPlus_lvwjq6$ = FlowOrInteractiveOrPhrasingContent.prototype.unaryPlus_lvwjq6$;
  FlowOrInteractiveContent.prototype.unaryPlus_pdl1vz$ = FlowOrInteractiveOrPhrasingContent.prototype.unaryPlus_pdl1vz$;
  FlowOrPhrasingContent.prototype.unaryPlus_lvwjq6$ = FlowOrInteractiveOrPhrasingContent.prototype.unaryPlus_lvwjq6$;
  FlowOrPhrasingContent.prototype.unaryPlus_pdl1vz$ = FlowOrInteractiveOrPhrasingContent.prototype.unaryPlus_pdl1vz$;
  SectioningOrFlowContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  SectioningOrFlowContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  FlowContent.prototype.unaryPlus_lvwjq6$ = FlowOrHeadingContent.prototype.unaryPlus_lvwjq6$;
  FlowContent.prototype.unaryPlus_pdl1vz$ = FlowOrHeadingContent.prototype.unaryPlus_pdl1vz$;
  HtmlBlockTag.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  HtmlBlockTag.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  UL.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  UL.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  InteractiveContent.prototype.unaryPlus_lvwjq6$ = FlowOrInteractiveContent.prototype.unaryPlus_lvwjq6$;
  InteractiveContent.prototype.unaryPlus_pdl1vz$ = FlowOrInteractiveContent.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacadeFlowInteractiveContent.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacadeFlowInteractiveContent.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  PhrasingContent.prototype.unaryPlus_lvwjq6$ = FlowOrPhrasingContent.prototype.unaryPlus_lvwjq6$;
  PhrasingContent.prototype.unaryPlus_pdl1vz$ = FlowOrPhrasingContent.prototype.unaryPlus_pdl1vz$;
  FlowPhrasingContent.prototype.unaryPlus_lvwjq6$ = FlowContent.prototype.unaryPlus_lvwjq6$;
  FlowPhrasingContent.prototype.unaryPlus_pdl1vz$ = FlowContent.prototype.unaryPlus_pdl1vz$;
  HtmlInlineTag.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  HtmlInlineTag.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  OBJECT_.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_lvwjq6$;
  OBJECT_.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_pdl1vz$;
  OL.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  OL.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  OPTGROUP.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  OPTGROUP.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  OPTION.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  OPTION.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  OUTPUT.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  OUTPUT.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  I.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  I.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  IFRAME.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_lvwjq6$;
  IFRAME.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_pdl1vz$;
  IMG.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_lvwjq6$;
  IMG.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_pdl1vz$;
  INPUT.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_lvwjq6$;
  INPUT.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_pdl1vz$;
  INS.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  INS.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  TABLE.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  TABLE.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  TBODY.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  TBODY.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  TD.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  TD.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  TEXTAREA.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_lvwjq6$;
  TEXTAREA.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_pdl1vz$;
  TFOOT.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  TFOOT.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  TH.prototype.unaryPlus_lvwjq6$ = HtmlInlineTag.prototype.unaryPlus_lvwjq6$;
  TH.prototype.unaryPlus_pdl1vz$ = HtmlInlineTag.prototype.unaryPlus_pdl1vz$;
  THEAD.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  THEAD.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  TIME.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  TIME.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  MetaDataContent.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  MetaDataContent.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  HtmlHeadTag.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  HtmlHeadTag.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  TITLE.prototype.unaryPlus_lvwjq6$ = HtmlHeadTag.prototype.unaryPlus_lvwjq6$;
  TITLE.prototype.unaryPlus_pdl1vz$ = HtmlHeadTag.prototype.unaryPlus_pdl1vz$;
  TR.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  TR.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  MAP.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  MAP.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  MARK.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  MARK.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  MATH.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  MATH.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  MATHML.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  MATHML.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  FlowMetaDataContent.prototype.unaryPlus_lvwjq6$ = FlowContent.prototype.unaryPlus_lvwjq6$;
  FlowMetaDataContent.prototype.unaryPlus_pdl1vz$ = FlowContent.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacadeFlowMetaDataContent.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacadeFlowMetaDataContent.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  FlowMetaDataPhrasingContent.prototype.unaryPlus_lvwjq6$ = FlowMetaDataContent.prototype.unaryPlus_lvwjq6$;
  FlowMetaDataPhrasingContent.prototype.unaryPlus_pdl1vz$ = FlowMetaDataContent.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  META.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.prototype.unaryPlus_lvwjq6$;
  META.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.prototype.unaryPlus_pdl1vz$;
  METER.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  METER.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  HeadingContent.prototype.unaryPlus_lvwjq6$ = FlowOrHeadingContent.prototype.unaryPlus_lvwjq6$;
  HeadingContent.prototype.unaryPlus_pdl1vz$ = FlowOrHeadingContent.prototype.unaryPlus_pdl1vz$;
  SectioningContent.prototype.unaryPlus_lvwjq6$ = SectioningOrFlowContent.prototype.unaryPlus_lvwjq6$;
  SectioningContent.prototype.unaryPlus_pdl1vz$ = SectioningOrFlowContent.prototype.unaryPlus_pdl1vz$;
  RP.prototype.unaryPlus_lvwjq6$ = HtmlInlineTag.prototype.unaryPlus_lvwjq6$;
  RP.prototype.unaryPlus_pdl1vz$ = HtmlInlineTag.prototype.unaryPlus_pdl1vz$;
  RT.prototype.unaryPlus_lvwjq6$ = HtmlInlineTag.prototype.unaryPlus_lvwjq6$;
  RT.prototype.unaryPlus_pdl1vz$ = HtmlInlineTag.prototype.unaryPlus_pdl1vz$;
  RUBY.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  RUBY.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  P.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  P.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  PRE.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  PRE.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  PROGRESS.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  PROGRESS.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  FIELDSET.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  FIELDSET.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  FIGCAPTION.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  FIGCAPTION.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  FIGURE.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  FIGURE.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  FOOTER.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  FOOTER.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  FORM.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  FORM.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacadeFlowSectioningContent.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacadeFlowSectioningContent.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  NAV.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowSectioningContent.prototype.unaryPlus_lvwjq6$;
  NAV.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowSectioningContent.prototype.unaryPlus_pdl1vz$;
  NOSCRIPT.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.prototype.unaryPlus_lvwjq6$;
  NOSCRIPT.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.prototype.unaryPlus_pdl1vz$;
  VAR_.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  VAR_.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  VIDEO.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_lvwjq6$;
  VIDEO.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_pdl1vz$;
  KBD.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  KBD.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  KEYGEN.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_lvwjq6$;
  KEYGEN.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_pdl1vz$;
  FormServerAttributeGroupFacade.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  FormServerAttributeGroupFacade.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  InputServerAttributeGroupFacade.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  InputServerAttributeGroupFacade.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  SelectServerAttributeGroupFacade.prototype.unaryPlus_lvwjq6$ = Tag.prototype.unaryPlus_lvwjq6$;
  SelectServerAttributeGroupFacade.prototype.unaryPlus_pdl1vz$ = Tag.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacadeFlowHeadingContent.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacadeFlowHeadingContent.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  SAMP.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  SAMP.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  SCRIPT.prototype.unaryPlus_lvwjq6$ = FlowMetaDataPhrasingContent.prototype.unaryPlus_lvwjq6$;
  SCRIPT.prototype.unaryPlus_pdl1vz$ = FlowMetaDataPhrasingContent.prototype.unaryPlus_pdl1vz$;
  SECTION.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowSectioningContent.prototype.unaryPlus_lvwjq6$;
  SECTION.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowSectioningContent.prototype.unaryPlus_pdl1vz$;
  SELECT.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_lvwjq6$;
  SELECT.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_pdl1vz$;
  SMALL.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  SMALL.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  SOURCE.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  SOURCE.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  SPAN.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  SPAN.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  STRONG.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  STRONG.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  STYLE.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowMetaDataContent.prototype.unaryPlus_lvwjq6$;
  STYLE.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowMetaDataContent.prototype.unaryPlus_pdl1vz$;
  SUB.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  SUB.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  SUP.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  SUP.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  SVG.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  SVG.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  DATALIST.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  DATALIST.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  DD.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  DD.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  DEL.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  DEL.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  DETAILS.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowInteractiveContent.prototype.unaryPlus_lvwjq6$;
  DETAILS.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowInteractiveContent.prototype.unaryPlus_pdl1vz$;
  DFN.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  DFN.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  DIALOG.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  DIALOG.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  DIV.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  DIV.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  DL.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  DL.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  DT.prototype.unaryPlus_lvwjq6$ = HtmlInlineTag.prototype.unaryPlus_lvwjq6$;
  DT.prototype.unaryPlus_pdl1vz$ = HtmlInlineTag.prototype.unaryPlus_pdl1vz$;
  LABEL.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_lvwjq6$;
  LABEL.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_pdl1vz$;
  LEGEND.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  LEGEND.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  LI.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  LI.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  LINK.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.prototype.unaryPlus_lvwjq6$;
  LINK.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.prototype.unaryPlus_pdl1vz$;
  Q.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  Q.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  B.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  B.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  BASE.prototype.unaryPlus_lvwjq6$ = HtmlHeadTag.prototype.unaryPlus_lvwjq6$;
  BASE.prototype.unaryPlus_pdl1vz$ = HtmlHeadTag.prototype.unaryPlus_pdl1vz$;
  BDI.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  BDI.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  BDO.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  BDO.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  BLOCKQUOTE.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  BLOCKQUOTE.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  BODY.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  BODY.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  BR.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  BR.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  BUTTON.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_lvwjq6$;
  BUTTON.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_pdl1vz$;
  A.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_lvwjq6$;
  A.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_pdl1vz$;
  ABBR.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  ABBR.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  ADDRESS.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  ADDRESS.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  AREA.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  AREA.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  ARTICLE.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowSectioningContent.prototype.unaryPlus_lvwjq6$;
  ARTICLE.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowSectioningContent.prototype.unaryPlus_pdl1vz$;
  ASIDE.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowSectioningContent.prototype.unaryPlus_lvwjq6$;
  ASIDE.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowSectioningContent.prototype.unaryPlus_pdl1vz$;
  AUDIO.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_lvwjq6$;
  AUDIO.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_pdl1vz$;
  CANVAS.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  CANVAS.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  CAPTION.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  CAPTION.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  CITE.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  CITE.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  CODE.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  CODE.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  COL.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  COL.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  COLGROUP.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  COLGROUP.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  COMMAND.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.prototype.unaryPlus_lvwjq6$;
  COMMAND.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowMetaDataPhrasingContent.prototype.unaryPlus_pdl1vz$;
  EM.prototype.unaryPlus_lvwjq6$ = HtmlBlockInlineTag.prototype.unaryPlus_lvwjq6$;
  EM.prototype.unaryPlus_pdl1vz$ = HtmlBlockInlineTag.prototype.unaryPlus_pdl1vz$;
  EMBED.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_lvwjq6$;
  EMBED.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowInteractivePhrasingContent.prototype.unaryPlus_pdl1vz$;
  H1.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.unaryPlus_lvwjq6$;
  H1.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.unaryPlus_pdl1vz$;
  H2.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.unaryPlus_lvwjq6$;
  H2.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.unaryPlus_pdl1vz$;
  H3.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.unaryPlus_lvwjq6$;
  H3.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.unaryPlus_pdl1vz$;
  H4.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.unaryPlus_lvwjq6$;
  H4.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.unaryPlus_pdl1vz$;
  H5.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.unaryPlus_lvwjq6$;
  H5.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.unaryPlus_pdl1vz$;
  H6.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.unaryPlus_lvwjq6$;
  H6.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowHeadingPhrasingContent.prototype.unaryPlus_pdl1vz$;
  HEAD.prototype.unaryPlus_lvwjq6$ = HtmlHeadTag.prototype.unaryPlus_lvwjq6$;
  HEAD.prototype.unaryPlus_pdl1vz$ = HtmlHeadTag.prototype.unaryPlus_pdl1vz$;
  HEADER.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  HEADER.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  HGROUP.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacadeFlowHeadingContent.prototype.unaryPlus_lvwjq6$;
  HGROUP.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacadeFlowHeadingContent.prototype.unaryPlus_pdl1vz$;
  HR.prototype.unaryPlus_lvwjq6$ = HtmlBlockTag.prototype.unaryPlus_lvwjq6$;
  HR.prototype.unaryPlus_pdl1vz$ = HtmlBlockTag.prototype.unaryPlus_pdl1vz$;
  HTML.prototype.unaryPlus_lvwjq6$ = CommonAttributeGroupFacade.prototype.unaryPlus_lvwjq6$;
  HTML.prototype.unaryPlus_pdl1vz$ = CommonAttributeGroupFacade.prototype.unaryPlus_pdl1vz$;
  DefaultUnsafe.prototype.unaryPlus_lvwjq6$ = Unsafe.prototype.unaryPlus_lvwjq6$;
  SingletonStringMap.prototype.getOrDefault_xwzc9p$ = Map.prototype.getOrDefault_xwzc9p$;
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$html = package$kotlinx.html || (package$kotlinx.html = {});
  package$html.currentTimeMillis = currentTimeMillis;
  var package$dom = package$html.dom || (package$html.dom = {});
  package$dom.JSDOMBuilder = JSDOMBuilder;
  package$dom.createTree_4wc2mh$ = createTree;
  package$dom.get_create_4wc2mh$ = get_create;
  package$dom.append_k9bwru$ = append;
  package$dom.get_append_y4uc6z$ = get_append;
  var package$injector = package$html.injector || (package$html.injector = {});
  package$injector.injectTo_n418us$ = injectTo;
  package$injector.InjectCapture = InjectCapture;
  package$injector.InjectByClassName = InjectByClassName;
  package$injector.InjectByTagName = InjectByTagName;
  Object.defineProperty(package$injector, 'InjectRoot', {
    get: InjectRoot_getInstance
  });
  package$injector.CustomCapture = CustomCapture;
  package$injector.InjectorConsumer = InjectorConsumer;
  package$injector.inject_d3dat4$ = inject;
  package$injector.appendAndInject_qj1uvz$ = appendAndInject;
  var package$js = package$html.js || (package$html.js = {});
  package$js.get_onAbortFunction_fxodxh$ = get_onAbortFunction;
  package$js.set_onAbortFunction_pszlq2$ = set_onAbortFunction;
  package$js.get_onBlurFunction_fxodxh$ = get_onBlurFunction;
  package$js.set_onBlurFunction_pszlq2$ = set_onBlurFunction;
  package$js.get_onCanPlayFunction_fxodxh$ = get_onCanPlayFunction;
  package$js.set_onCanPlayFunction_pszlq2$ = set_onCanPlayFunction;
  package$js.get_onCanPlayThroughFunction_fxodxh$ = get_onCanPlayThroughFunction;
  package$js.set_onCanPlayThroughFunction_pszlq2$ = set_onCanPlayThroughFunction;
  package$js.get_onChangeFunction_fxodxh$ = get_onChangeFunction;
  package$js.set_onChangeFunction_pszlq2$ = set_onChangeFunction;
  package$js.get_onClickFunction_fxodxh$ = get_onClickFunction;
  package$js.set_onClickFunction_pszlq2$ = set_onClickFunction;
  package$js.get_onContextMenuFunction_fxodxh$ = get_onContextMenuFunction;
  package$js.set_onContextMenuFunction_pszlq2$ = set_onContextMenuFunction;
  package$js.get_onDoubleClickFunction_fxodxh$ = get_onDoubleClickFunction;
  package$js.set_onDoubleClickFunction_pszlq2$ = set_onDoubleClickFunction;
  package$js.get_onDragFunction_fxodxh$ = get_onDragFunction;
  package$js.set_onDragFunction_pszlq2$ = set_onDragFunction;
  package$js.get_onDragEnterFunction_fxodxh$ = get_onDragEnterFunction;
  package$js.set_onDragEnterFunction_pszlq2$ = set_onDragEnterFunction;
  package$js.get_onDragLeaveFunction_fxodxh$ = get_onDragLeaveFunction;
  package$js.set_onDragLeaveFunction_pszlq2$ = set_onDragLeaveFunction;
  package$js.get_onDragOverFunction_fxodxh$ = get_onDragOverFunction;
  package$js.set_onDragOverFunction_pszlq2$ = set_onDragOverFunction;
  package$js.get_onDragStartFunction_fxodxh$ = get_onDragStartFunction;
  package$js.set_onDragStartFunction_pszlq2$ = set_onDragStartFunction;
  package$js.get_onDropFunction_fxodxh$ = get_onDropFunction;
  package$js.set_onDropFunction_pszlq2$ = set_onDropFunction;
  package$js.get_onDurationChangeFunction_fxodxh$ = get_onDurationChangeFunction;
  package$js.set_onDurationChangeFunction_pszlq2$ = set_onDurationChangeFunction;
  package$js.get_onEmptiedFunction_fxodxh$ = get_onEmptiedFunction;
  package$js.set_onEmptiedFunction_pszlq2$ = set_onEmptiedFunction;
  package$js.get_onEndedFunction_fxodxh$ = get_onEndedFunction;
  package$js.set_onEndedFunction_pszlq2$ = set_onEndedFunction;
  package$js.get_onErrorFunction_fxodxh$ = get_onErrorFunction;
  package$js.set_onErrorFunction_pszlq2$ = set_onErrorFunction;
  package$js.get_onFocusFunction_fxodxh$ = get_onFocusFunction;
  package$js.set_onFocusFunction_pszlq2$ = set_onFocusFunction;
  package$js.get_onFormChangeFunction_fxodxh$ = get_onFormChangeFunction;
  package$js.set_onFormChangeFunction_pszlq2$ = set_onFormChangeFunction;
  package$js.get_onFormInputFunction_fxodxh$ = get_onFormInputFunction;
  package$js.set_onFormInputFunction_pszlq2$ = set_onFormInputFunction;
  package$js.get_onInputFunction_fxodxh$ = get_onInputFunction;
  package$js.set_onInputFunction_pszlq2$ = set_onInputFunction;
  package$js.get_onInvalidFunction_fxodxh$ = get_onInvalidFunction;
  package$js.set_onInvalidFunction_pszlq2$ = set_onInvalidFunction;
  package$js.get_onKeyDownFunction_fxodxh$ = get_onKeyDownFunction;
  package$js.set_onKeyDownFunction_pszlq2$ = set_onKeyDownFunction;
  package$js.get_onKeyPressFunction_fxodxh$ = get_onKeyPressFunction;
  package$js.set_onKeyPressFunction_pszlq2$ = set_onKeyPressFunction;
  package$js.get_onKeyUpFunction_fxodxh$ = get_onKeyUpFunction;
  package$js.set_onKeyUpFunction_pszlq2$ = set_onKeyUpFunction;
  package$js.get_onLoadFunction_fxodxh$ = get_onLoadFunction;
  package$js.set_onLoadFunction_pszlq2$ = set_onLoadFunction;
  package$js.get_onLoadedDataFunction_fxodxh$ = get_onLoadedDataFunction;
  package$js.set_onLoadedDataFunction_pszlq2$ = set_onLoadedDataFunction;
  package$js.get_onLoadedMetaDataFunction_fxodxh$ = get_onLoadedMetaDataFunction;
  package$js.set_onLoadedMetaDataFunction_pszlq2$ = set_onLoadedMetaDataFunction;
  package$js.get_onLoadStartFunction_fxodxh$ = get_onLoadStartFunction;
  package$js.set_onLoadStartFunction_pszlq2$ = set_onLoadStartFunction;
  package$js.get_onMouseDownFunction_fxodxh$ = get_onMouseDownFunction;
  package$js.set_onMouseDownFunction_pszlq2$ = set_onMouseDownFunction;
  package$js.get_onMouseMoveFunction_fxodxh$ = get_onMouseMoveFunction;
  package$js.set_onMouseMoveFunction_pszlq2$ = set_onMouseMoveFunction;
  package$js.get_onMouseOutFunction_fxodxh$ = get_onMouseOutFunction;
  package$js.set_onMouseOutFunction_pszlq2$ = set_onMouseOutFunction;
  package$js.get_onMouseOverFunction_fxodxh$ = get_onMouseOverFunction;
  package$js.set_onMouseOverFunction_pszlq2$ = set_onMouseOverFunction;
  package$js.get_onMouseUpFunction_fxodxh$ = get_onMouseUpFunction;
  package$js.set_onMouseUpFunction_pszlq2$ = set_onMouseUpFunction;
  package$js.get_onMouseWheelFunction_fxodxh$ = get_onMouseWheelFunction;
  package$js.set_onMouseWheelFunction_pszlq2$ = set_onMouseWheelFunction;
  package$js.get_onPauseFunction_fxodxh$ = get_onPauseFunction;
  package$js.set_onPauseFunction_pszlq2$ = set_onPauseFunction;
  package$js.get_onPlayFunction_fxodxh$ = get_onPlayFunction;
  package$js.set_onPlayFunction_pszlq2$ = set_onPlayFunction;
  package$js.get_onPlayingFunction_fxodxh$ = get_onPlayingFunction;
  package$js.set_onPlayingFunction_pszlq2$ = set_onPlayingFunction;
  package$js.get_onProgressFunction_fxodxh$ = get_onProgressFunction;
  package$js.set_onProgressFunction_pszlq2$ = set_onProgressFunction;
  package$js.get_onRateChangeFunction_fxodxh$ = get_onRateChangeFunction;
  package$js.set_onRateChangeFunction_pszlq2$ = set_onRateChangeFunction;
  package$js.get_onReadyStateChangeFunction_fxodxh$ = get_onReadyStateChangeFunction;
  package$js.set_onReadyStateChangeFunction_pszlq2$ = set_onReadyStateChangeFunction;
  package$js.get_onScrollFunction_fxodxh$ = get_onScrollFunction;
  package$js.set_onScrollFunction_pszlq2$ = set_onScrollFunction;
  package$js.get_onSeekedFunction_fxodxh$ = get_onSeekedFunction;
  package$js.set_onSeekedFunction_pszlq2$ = set_onSeekedFunction;
  package$js.get_onSeekingFunction_fxodxh$ = get_onSeekingFunction;
  package$js.set_onSeekingFunction_pszlq2$ = set_onSeekingFunction;
  package$js.get_onSelectFunction_fxodxh$ = get_onSelectFunction;
  package$js.set_onSelectFunction_pszlq2$ = set_onSelectFunction;
  package$js.get_onShowFunction_fxodxh$ = get_onShowFunction;
  package$js.set_onShowFunction_pszlq2$ = set_onShowFunction;
  package$js.get_onStalledFunction_fxodxh$ = get_onStalledFunction;
  package$js.set_onStalledFunction_pszlq2$ = set_onStalledFunction;
  package$js.get_onSubmitFunction_fxodxh$ = get_onSubmitFunction;
  package$js.set_onSubmitFunction_pszlq2$ = set_onSubmitFunction;
  package$js.get_onSuspendFunction_fxodxh$ = get_onSuspendFunction;
  package$js.set_onSuspendFunction_pszlq2$ = set_onSuspendFunction;
  package$js.get_onTimeUpdateFunction_fxodxh$ = get_onTimeUpdateFunction;
  package$js.set_onTimeUpdateFunction_pszlq2$ = set_onTimeUpdateFunction;
  package$js.get_onVolumeChangeFunction_fxodxh$ = get_onVolumeChangeFunction;
  package$js.set_onVolumeChangeFunction_pszlq2$ = set_onVolumeChangeFunction;
  package$js.get_onWaitingFunction_fxodxh$ = get_onWaitingFunction;
  package$js.set_onWaitingFunction_pszlq2$ = set_onWaitingFunction;
  package$js.a_5i6vd$ = a;
  package$js.abbr_y8m8ul$ = abbr;
  package$js.address_ywnrmy$ = address;
  package$js.area_78z5jz$ = area;
  package$js.article_rpidd8$ = article;
  package$js.aside_k4rhbi$ = aside;
  package$js.audio_bbjfyk$ = audio;
  package$js.b_x0nqqg$ = b;
  package$js.base_rhdnbn$ = base;
  package$js.bdi_430vtv$ = bdi;
  package$js.bdo_3g3eqr$ = bdo;
  package$js.blockQuote_rw5zzj$ = blockQuote;
  package$js.body_sbi9b0$ = body;
  package$js.br_jn093m$ = br;
  package$js.button_5fpah4$ = button;
  package$js.canvas_61vnh7$ = canvas;
  package$js.canvas_o2d15m$ = canvas_0;
  package$js.caption_2b4nbw$ = caption;
  package$js.cite_vhqron$ = cite;
  package$js.code_osm44v$ = code;
  package$js.col_7tq9i$ = col;
  package$js.colGroup_8s3ugv$ = colGroup;
  package$js.command_8fvebf$ = command;
  package$js.dataList_jju9ai$ = dataList;
  package$js.dd_8uujpe$ = dd;
  package$js.del_z132bj$ = del;
  package$js.details_v1c0ag$ = details;
  package$js.dfn_6e2jtu$ = dfn;
  package$js.dialog_o1mqye$ = dialog;
  package$js.div_wkomt5$ = div;
  package$js.dl_4s12uu$ = dl;
  package$js.dt_iewpf2$ = dt;
  package$js.em_bpkgve$ = em;
  package$js.embed_f82m33$ = embed;
  package$js.fieldSet_ocqxli$ = fieldSet;
  package$js.figcaption_k8kml8$ = figcaption;
  package$js.figure_a9op5m$ = figure;
  package$js.footer_rkqwo3$ = footer;
  package$js.form_cxki7s$ = form;
  package$js.h1_1esf85$ = h1;
  package$js.h2_nirn70$ = h2;
  package$js.h3_mksccz$ = h3;
  package$js.h4_2crq26$ = h4;
  package$js.h5_rabshb$ = h5;
  package$js.h6_it872o$ = h6;
  package$js.head_z94brr$ = head;
  package$js.header_sok7e9$ = header;
  package$js.hGroup_8f4qzd$ = hGroup;
  package$js.hr_v0qv1w$ = hr;
  package$js.html_rkyhvw$ = html;
  package$js.i_5jry8x$ = i;
  package$js.iframe_4ksjnb$ = iframe;
  package$js.iframe_g0q2yy$ = iframe_0;
  package$js.img_6lw7hj$ = img;
  package$js.input_x8a5sv$ = input;
  package$js.ins_xcl8o4$ = ins;
  package$js.kbd_ijivhf$ = kbd;
  package$js.keyGen_qu3nek$ = keyGen;
  package$js.label_uo7uay$ = label;
  package$js.legEnd_ax8bv3$ = legEnd;
  package$js.li_525bpd$ = li;
  package$js.link_iq3rqc$ = link;
  package$js.map_ibzf9n$ = map_0;
  package$js.mark_44qn2n$ = mark;
  package$js.math_giqjli$ = math;
  package$js.mathml_61vnh7$ = mathml;
  package$js.mathml_lcwe6v$ = mathml_0;
  package$js.meta_md3qs2$ = meta;
  package$js.meter_5zj8jj$ = meter;
  package$js.nav_pc7gpz$ = nav;
  package$js.noScript_87229e$ = noScript;
  package$js.object__nau622$ = object_;
  package$js.ol_qmgqht$ = ol;
  package$js.optGroup_p3q3kl$ = optGroup;
  package$js.option_61vnh7$ = option;
  package$js.option_o2wi2f$ = option_0;
  package$js.output_38nbp9$ = output;
  package$js.p_qwwequ$ = p;
  package$js.param_4880cc$ = param;
  package$js.pre_kad921$ = pre;
  package$js.progress_kmv2hd$ = progress;
  package$js.q_j6nkt5$ = q;
  package$js.rp_n982v4$ = rp;
  package$js.rt_5fw4uc$ = rt;
  package$js.ruby_12w3h8$ = ruby;
  package$js.samp_11f6yb$ = samp;
  package$js.script_m6rtyx$ = script;
  package$js.section_ceckl$ = section;
  package$js.select_hs5l1a$ = select;
  package$js.small_8pbyt9$ = small;
  package$js.source_1ucc65$ = source;
  package$js.span_x24v7w$ = span;
  package$js.strong_ddyujd$ = strong;
  package$js.style_61vnh7$ = style;
  package$js.style_s80t09$ = style_0;
  package$js.sub_cp04y2$ = sub;
  package$js.sup_isrgxo$ = sup;
  package$js.svg_61vnh7$ = svg;
  package$js.svg_whpmhm$ = svg_0;
  package$js.table_uk5qws$ = table;
  package$js.tbody_sr8158$ = tbody;
  package$js.td_ftqcky$ = td;
  package$js.textArea_krlhnm$ = textArea;
  package$js.textArea_wr40b$ = textArea_0;
  package$js.tfoot_tdtbiw$ = tfoot;
  package$js.th_lypajb$ = th;
  package$js.thead_awes1i$ = thead;
  package$js.time_veotvz$ = time;
  package$js.title_bq9830$ = title;
  package$js.title_nrj9p5$ = title_0;
  package$js.tr_9pz0lc$ = tr;
  package$js.ul_693so7$ = ul;
  package$js.var__scrye$ = var_;
  package$js.video_kpr04x$ = video;
  var package$consumers = package$html.consumers || (package$html.consumers = {});
  package$consumers.trace_3mrk8e$ = trace;
  package$consumers.DelayedConsumer = DelayedConsumer;
  package$consumers.delayed_3mrk8e$ = delayed;
  var package$impl = package$html.impl || (package$html.impl = {});
  package$impl.DelegatingMap = DelegatingMap;
  package$consumers.catch_5uvl3r$ = catch_0;
  package$consumers.TimedResult = TimedResult;
  package$consumers.get_out_bh6yji$ = get_out;
  package$consumers.measureTime_3mrk8e$ = measureTime;
  var package$attributes = package$html.attributes || (package$html.attributes = {});
  package$attributes.AttributeEncoder = AttributeEncoder;
  package$attributes.Attribute = Attribute;
  Object.defineProperty(package$attributes, 'StringEncoder', {
    get: StringEncoder_getInstance
  });
  package$attributes.StringAttribute = StringAttribute;
  package$attributes.booleanEncode_1v8dcc$ = booleanEncode;
  package$attributes.BooleanEncoder = BooleanEncoder;
  package$attributes.BooleanAttribute = BooleanAttribute;
  package$attributes.tickerEncode_gigfna$ = tickerEncode;
  Object.defineProperty(package$attributes, 'TickerEncoder', {
    get: TickerEncoder_getInstance
  });
  package$attributes.TickerAttribute = TickerAttribute;
  package$attributes.EnumEncoder = EnumEncoder;
  package$attributes.enumEncode_m4whry$ = enumEncode;
  package$attributes.EnumAttribute = EnumAttribute;
  package$attributes.stringSetDecode_pdl1vj$ = stringSetDecode;
  package$attributes.stringSetEncode_gevexo$ = stringSetEncode;
  Object.defineProperty(package$attributes, 'StringSetEncoder', {
    get: StringSetEncoder_getInstance
  });
  package$attributes.StringSetAttribute = StringSetAttribute;
  var package$stream = package$html.stream || (package$html.stream = {});
  package$stream.HTMLStreamBuilder = HTMLStreamBuilder;
  package$stream.createHTML_6taknv$ = createHTML;
  package$stream.appendHTML_9kwp7w$ = appendHTML;
  package$html.UL = UL;
  package$html.li_yzv5uh$ = li_0;
  package$html.OBJECT_ = OBJECT_;
  package$html.param_bcvvob$ = param_0;
  package$html.get_asFlowContent_fcnfuj$ = get_asFlowContent;
  package$html.get_asInteractiveContent_fcnfuj$ = get_asInteractiveContent;
  package$html.get_asPhrasingContent_fcnfuj$ = get_asPhrasingContent;
  package$html.OL = OL;
  package$html.li_nemw19$ = li_1;
  package$html.OPTGROUP = OPTGROUP;
  package$html.option_z52iho$ = option_1;
  package$html.option_84jv0q$ = option_2;
  package$html.OPTION = OPTION;
  package$html.OUTPUT = OUTPUT;
  package$html.get_asFlowContent_mffrb2$ = get_asFlowContent_0;
  package$html.get_asPhrasingContent_mffrb2$ = get_asPhrasingContent_0;
  package$html.I = I;
  package$html.get_asFlowContent_lkq382$ = get_asFlowContent_1;
  package$html.get_asPhrasingContent_lkq382$ = get_asPhrasingContent_1;
  package$html.IFRAME = IFRAME;
  package$html.get_asFlowContent_ofcz3z$ = get_asFlowContent_2;
  package$html.get_asInteractiveContent_ofcz3z$ = get_asInteractiveContent_0;
  package$html.get_asPhrasingContent_ofcz3z$ = get_asPhrasingContent_2;
  package$html.IMG = IMG;
  package$html.get_asFlowContent_6sfars$ = get_asFlowContent_3;
  package$html.get_asInteractiveContent_6sfars$ = get_asInteractiveContent_1;
  package$html.get_asPhrasingContent_6sfars$ = get_asPhrasingContent_3;
  package$html.INPUT = INPUT;
  package$html.get_asFlowContent_a2ovwx$ = get_asFlowContent_4;
  package$html.get_asInteractiveContent_a2ovwx$ = get_asInteractiveContent_2;
  package$html.get_asPhrasingContent_a2ovwx$ = get_asPhrasingContent_4;
  package$html.INS = INS;
  package$html.get_asFlowContent_6sf9qr$ = get_asFlowContent_5;
  package$html.get_asPhrasingContent_6sf9qr$ = get_asPhrasingContent_5;
  package$html.TABLE = TABLE;
  package$html.caption_dcoxz5$ = caption_0;
  package$html.colGroup_ll6ybo$ = colGroup_0;
  package$html.thead_j1nulr$ = thead_0;
  package$html.tfoot_bp83sz$ = tfoot_0;
  package$html.tbody_cbte6n$ = tbody_0;
  package$html.tr_7wec05$ = tr_0;
  package$html.TBODY = TBODY;
  package$html.tr_tlv0jx$ = tr_1;
  package$html.TD = TD;
  package$html.TEXTAREA = TEXTAREA;
  package$html.get_asFlowContent_dtfm6v$ = get_asFlowContent_6;
  package$html.get_asInteractiveContent_dtfm6v$ = get_asInteractiveContent_3;
  package$html.get_asPhrasingContent_dtfm6v$ = get_asPhrasingContent_6;
  package$html.TFOOT = TFOOT;
  package$html.tr_7v6uah$ = tr_2;
  package$html.TH = TH;
  package$html.THEAD = THEAD;
  package$html.tr_lut1f9$ = tr_3;
  package$html.TIME = TIME;
  package$html.get_asFlowContent_2s57li$ = get_asFlowContent_7;
  package$html.get_asPhrasingContent_2s57li$ = get_asPhrasingContent_7;
  package$html.TITLE = TITLE;
  package$html.TR = TR;
  package$html.th_bncpyi$ = th_0;
  package$html.colTh_aq069j$ = colTh;
  package$html.colGroupTh_aq069j$ = colGroupTh;
  package$html.rowTh_aq069j$ = rowTh;
  package$html.rowGroupTh_aq069j$ = rowGroupTh;
  package$html.td_vlzo05$ = td_0;
  Object.defineProperty(Dir, 'ltr', {
    get: Dir$ltr_getInstance
  });
  Object.defineProperty(Dir, 'rtl', {
    get: Dir$rtl_getInstance
  });
  package$html.Dir = Dir;
  Object.defineProperty(Draggable, 'true_', {
    get: Draggable$true__getInstance
  });
  Object.defineProperty(Draggable, 'false_', {
    get: Draggable$false__getInstance
  });
  Object.defineProperty(Draggable, 'auto', {
    get: Draggable$auto_getInstance
  });
  package$html.Draggable = Draggable;
  Object.defineProperty(RunAt, 'server', {
    get: RunAt$server_getInstance
  });
  package$html.RunAt = RunAt;
  Object.defineProperty(package$html, 'ATarget', {
    get: ATarget_getInstance
  });
  Object.defineProperty(package$html, 'ARel', {
    get: ARel_getInstance
  });
  Object.defineProperty(package$html, 'AType', {
    get: AType_getInstance
  });
  Object.defineProperty(AreaShape, 'rect', {
    get: AreaShape$rect_getInstance
  });
  Object.defineProperty(AreaShape, 'circle', {
    get: AreaShape$circle_getInstance
  });
  Object.defineProperty(AreaShape, 'poly', {
    get: AreaShape$poly_getInstance
  });
  Object.defineProperty(AreaShape, 'default', {
    get: AreaShape$default_getInstance
  });
  package$html.AreaShape = AreaShape;
  Object.defineProperty(package$html, 'AreaTarget', {
    get: AreaTarget_getInstance
  });
  Object.defineProperty(package$html, 'AreaRel', {
    get: AreaRel_getInstance
  });
  Object.defineProperty(package$html, 'BaseTarget', {
    get: BaseTarget_getInstance
  });
  Object.defineProperty(ButtonFormEncType, 'multipartFormData', {
    get: ButtonFormEncType$multipartFormData_getInstance
  });
  Object.defineProperty(ButtonFormEncType, 'applicationXWwwFormUrlEncoded', {
    get: ButtonFormEncType$applicationXWwwFormUrlEncoded_getInstance
  });
  Object.defineProperty(ButtonFormEncType, 'textPlain', {
    get: ButtonFormEncType$textPlain_getInstance
  });
  package$html.ButtonFormEncType = ButtonFormEncType;
  Object.defineProperty(ButtonFormMethod, 'get', {
    get: ButtonFormMethod$get_getInstance
  });
  Object.defineProperty(ButtonFormMethod, 'post', {
    get: ButtonFormMethod$post_getInstance
  });
  Object.defineProperty(ButtonFormMethod, 'put', {
    get: ButtonFormMethod$put_getInstance
  });
  Object.defineProperty(ButtonFormMethod, 'delete', {
    get: ButtonFormMethod$delete_getInstance
  });
  package$html.ButtonFormMethod = ButtonFormMethod;
  Object.defineProperty(package$html, 'ButtonFormTarget', {
    get: ButtonFormTarget_getInstance
  });
  Object.defineProperty(ButtonType, 'button', {
    get: ButtonType$button_getInstance
  });
  Object.defineProperty(ButtonType, 'reset', {
    get: ButtonType$reset_getInstance
  });
  Object.defineProperty(ButtonType, 'submit', {
    get: ButtonType$submit_getInstance
  });
  package$html.ButtonType = ButtonType;
  Object.defineProperty(CommandType, 'command', {
    get: CommandType$command_getInstance
  });
  Object.defineProperty(CommandType, 'checkBox', {
    get: CommandType$checkBox_getInstance
  });
  Object.defineProperty(CommandType, 'radio', {
    get: CommandType$radio_getInstance
  });
  package$html.CommandType = CommandType;
  Object.defineProperty(FormEncType, 'multipartFormData', {
    get: FormEncType$multipartFormData_getInstance
  });
  Object.defineProperty(FormEncType, 'applicationXWwwFormUrlEncoded', {
    get: FormEncType$applicationXWwwFormUrlEncoded_getInstance
  });
  Object.defineProperty(FormEncType, 'textPlain', {
    get: FormEncType$textPlain_getInstance
  });
  package$html.FormEncType = FormEncType;
  Object.defineProperty(FormMethod, 'get', {
    get: FormMethod$get_getInstance
  });
  Object.defineProperty(FormMethod, 'post', {
    get: FormMethod$post_getInstance
  });
  Object.defineProperty(FormMethod, 'put', {
    get: FormMethod$put_getInstance
  });
  Object.defineProperty(FormMethod, 'delete', {
    get: FormMethod$delete_getInstance
  });
  package$html.FormMethod = FormMethod;
  Object.defineProperty(package$html, 'FormTarget', {
    get: FormTarget_getInstance
  });
  Object.defineProperty(package$html, 'IframeName', {
    get: IframeName_getInstance
  });
  Object.defineProperty(IframeSandbox, 'allowSameOrigin', {
    get: IframeSandbox$allowSameOrigin_getInstance
  });
  Object.defineProperty(IframeSandbox, 'allowFormS', {
    get: IframeSandbox$allowFormS_getInstance
  });
  Object.defineProperty(IframeSandbox, 'allowScripts', {
    get: IframeSandbox$allowScripts_getInstance
  });
  package$html.IframeSandbox = IframeSandbox;
  Object.defineProperty(InputType, 'button', {
    get: InputType$button_getInstance
  });
  Object.defineProperty(InputType, 'checkBox', {
    get: InputType$checkBox_getInstance
  });
  Object.defineProperty(InputType, 'color', {
    get: InputType$color_getInstance
  });
  Object.defineProperty(InputType, 'date', {
    get: InputType$date_getInstance
  });
  Object.defineProperty(InputType, 'dateTime', {
    get: InputType$dateTime_getInstance
  });
  Object.defineProperty(InputType, 'dateTimeLocal', {
    get: InputType$dateTimeLocal_getInstance
  });
  Object.defineProperty(InputType, 'email', {
    get: InputType$email_getInstance
  });
  Object.defineProperty(InputType, 'file', {
    get: InputType$file_getInstance
  });
  Object.defineProperty(InputType, 'hidden', {
    get: InputType$hidden_getInstance
  });
  Object.defineProperty(InputType, 'image', {
    get: InputType$image_getInstance
  });
  Object.defineProperty(InputType, 'month', {
    get: InputType$month_getInstance
  });
  Object.defineProperty(InputType, 'number', {
    get: InputType$number_getInstance
  });
  Object.defineProperty(InputType, 'password', {
    get: InputType$password_getInstance
  });
  Object.defineProperty(InputType, 'radio', {
    get: InputType$radio_getInstance
  });
  Object.defineProperty(InputType, 'range', {
    get: InputType$range_getInstance
  });
  Object.defineProperty(InputType, 'reset', {
    get: InputType$reset_getInstance
  });
  Object.defineProperty(InputType, 'search', {
    get: InputType$search_getInstance
  });
  Object.defineProperty(InputType, 'submit', {
    get: InputType$submit_getInstance
  });
  Object.defineProperty(InputType, 'text', {
    get: InputType$text_getInstance
  });
  Object.defineProperty(InputType, 'tel', {
    get: InputType$tel_getInstance
  });
  Object.defineProperty(InputType, 'time', {
    get: InputType$time_getInstance
  });
  Object.defineProperty(InputType, 'url', {
    get: InputType$url_getInstance
  });
  Object.defineProperty(InputType, 'week', {
    get: InputType$week_getInstance
  });
  package$html.InputType = InputType;
  Object.defineProperty(InputFormEncType, 'multipartFormData', {
    get: InputFormEncType$multipartFormData_getInstance
  });
  Object.defineProperty(InputFormEncType, 'applicationXWwwFormUrlEncoded', {
    get: InputFormEncType$applicationXWwwFormUrlEncoded_getInstance
  });
  Object.defineProperty(InputFormEncType, 'textPlain', {
    get: InputFormEncType$textPlain_getInstance
  });
  package$html.InputFormEncType = InputFormEncType;
  Object.defineProperty(InputFormMethod, 'get', {
    get: InputFormMethod$get_getInstance
  });
  Object.defineProperty(InputFormMethod, 'post', {
    get: InputFormMethod$post_getInstance
  });
  Object.defineProperty(InputFormMethod, 'put', {
    get: InputFormMethod$put_getInstance
  });
  Object.defineProperty(InputFormMethod, 'delete', {
    get: InputFormMethod$delete_getInstance
  });
  package$html.InputFormMethod = InputFormMethod;
  Object.defineProperty(package$html, 'InputFormTarget', {
    get: InputFormTarget_getInstance
  });
  Object.defineProperty(KeyGenKeyType, 'rsa', {
    get: KeyGenKeyType$rsa_getInstance
  });
  package$html.KeyGenKeyType = KeyGenKeyType;
  Object.defineProperty(package$html, 'LinkRel', {
    get: LinkRel_getInstance
  });
  Object.defineProperty(package$html, 'LinkMedia', {
    get: LinkMedia_getInstance
  });
  Object.defineProperty(package$html, 'LinkType', {
    get: LinkType_getInstance
  });
  Object.defineProperty(package$html, 'MetaHttpEquiv', {
    get: MetaHttpEquiv_getInstance
  });
  Object.defineProperty(package$html, 'ObjectName', {
    get: ObjectName_getInstance
  });
  Object.defineProperty(ScriptType, 'textEcmaScript', {
    get: ScriptType$textEcmaScript_getInstance
  });
  Object.defineProperty(ScriptType, 'textJavaScript', {
    get: ScriptType$textJavaScript_getInstance
  });
  Object.defineProperty(ScriptType, 'textJavaScript10', {
    get: ScriptType$textJavaScript10_getInstance
  });
  Object.defineProperty(ScriptType, 'textJavaScript11', {
    get: ScriptType$textJavaScript11_getInstance
  });
  Object.defineProperty(ScriptType, 'textJavaScript12', {
    get: ScriptType$textJavaScript12_getInstance
  });
  Object.defineProperty(ScriptType, 'textJavaScript13', {
    get: ScriptType$textJavaScript13_getInstance
  });
  Object.defineProperty(ScriptType, 'textJavaScript14', {
    get: ScriptType$textJavaScript14_getInstance
  });
  Object.defineProperty(ScriptType, 'textJavaScript15', {
    get: ScriptType$textJavaScript15_getInstance
  });
  Object.defineProperty(ScriptType, 'textJScript', {
    get: ScriptType$textJScript_getInstance
  });
  Object.defineProperty(ScriptType, 'textXJavaScript', {
    get: ScriptType$textXJavaScript_getInstance
  });
  Object.defineProperty(ScriptType, 'textXEcmaScript', {
    get: ScriptType$textXEcmaScript_getInstance
  });
  Object.defineProperty(ScriptType, 'textVbScript', {
    get: ScriptType$textVbScript_getInstance
  });
  package$html.ScriptType = ScriptType;
  Object.defineProperty(package$html, 'StyleType', {
    get: StyleType_getInstance
  });
  Object.defineProperty(package$html, 'StyleMedia', {
    get: StyleMedia_getInstance
  });
  Object.defineProperty(TextAreaWrap, 'hard', {
    get: TextAreaWrap$hard_getInstance
  });
  Object.defineProperty(TextAreaWrap, 'soft', {
    get: TextAreaWrap$soft_getInstance
  });
  package$html.TextAreaWrap = TextAreaWrap;
  Object.defineProperty(ThScope, 'col', {
    get: ThScope$col_getInstance
  });
  Object.defineProperty(ThScope, 'colGroup', {
    get: ThScope$colGroup_getInstance
  });
  Object.defineProperty(ThScope, 'row', {
    get: ThScope$row_getInstance
  });
  Object.defineProperty(ThScope, 'rowGroup', {
    get: ThScope$rowGroup_getInstance
  });
  package$html.ThScope = ThScope;
  package$html.MAP = MAP;
  package$html.get_asFlowContent_6sczi9$ = get_asFlowContent_8;
  package$html.get_asPhrasingContent_6sczi9$ = get_asPhrasingContent_8;
  package$html.MARK = MARK;
  package$html.get_asFlowContent_2o5nee$ = get_asFlowContent_9;
  package$html.get_asPhrasingContent_2o5nee$ = get_asPhrasingContent_9;
  package$html.MATH = MATH;
  package$html.get_asFlowContent_2o5ot7$ = get_asFlowContent_10;
  package$html.get_asPhrasingContent_2o5ot7$ = get_asPhrasingContent_10;
  package$html.MATHML = MATHML;
  package$html.META = META;
  package$html.get_asFlowContent_2o88la$ = get_asFlowContent_11;
  package$html.get_asMetaDataContent_2o88la$ = get_asMetaDataContent;
  package$html.get_asPhrasingContent_2o88la$ = get_asPhrasingContent_11;
  package$html.METER = METER;
  package$html.get_asFlowContent_btzg6q$ = get_asFlowContent_12;
  package$html.get_asPhrasingContent_btzg6q$ = get_asPhrasingContent_12;
  package$html.FlowContent = FlowContent;
  package$html.HeadingContent = HeadingContent;
  package$html.InteractiveContent = InteractiveContent;
  package$html.MetaDataContent = MetaDataContent;
  package$html.PhrasingContent = PhrasingContent;
  package$html.SectioningContent = SectioningContent;
  package$html.address_qlk71o$ = address_0;
  package$html.blockQuote_1wgk0f$ = blockQuote_0;
  package$html.dialog_3ow4zc$ = dialog_0;
  package$html.div_ri36nr$ = div_0;
  package$html.dl_rgoo3s$ = dl_0;
  package$html.fieldSet_27mjzc$ = fieldSet_0;
  package$html.figure_a31wtg$ = figure_0;
  package$html.figcaption_9k1xeq$ = figcaption_0;
  package$html.footer_780ap1$ = footer_0;
  package$html.form_3vb3wm$ = form_0;
  package$html.getForm_mq1sio$ = getForm;
  package$html.postForm_mq1sio$ = postForm;
  package$html.putForm_mq1sio$ = putForm;
  package$html.deleteForm_mq1sio$ = deleteForm;
  package$html.header_8btlf7$ = header_0;
  package$html.hr_17yvwq$ = hr_0;
  package$html.ol_5m90gt$ = ol_0;
  package$html.p_8pggrc$ = p_0;
  package$html.pre_pcyp7f$ = pre_0;
  package$html.table_dmqmme$ = table_0;
  package$html.ul_pzlyaf$ = ul_0;
  package$html.base_5vco8i$ = base_0;
  package$html.command_rwkldo$ = command_0;
  package$html.commandCommand_eo8vlq$ = commandCommand;
  package$html.checkBoxCommand_eo8vlq$ = checkBoxCommand;
  package$html.radioCommand_eo8vlq$ = radioCommand;
  package$html.link_geovej$ = link_0;
  package$html.meta_g4adt$ = meta_0;
  package$html.noScript_rsjfn1$ = noScript_0;
  package$html.script_csk05k$ = script_0;
  package$html.textEcmaScriptScript_uenml0$ = textEcmaScriptScript;
  package$html.textJavaScriptScript_uenml0$ = textJavaScriptScript;
  package$html.textJavaScript10Script_uenml0$ = textJavaScript10Script;
  package$html.textJavaScript11Script_uenml0$ = textJavaScript11Script;
  package$html.textJavaScript12Script_uenml0$ = textJavaScript12Script;
  package$html.textJavaScript13Script_uenml0$ = textJavaScript13Script;
  package$html.textJavaScript14Script_uenml0$ = textJavaScript14Script;
  package$html.textJavaScript15Script_uenml0$ = textJavaScript15Script;
  package$html.textJScriptScript_uenml0$ = textJScriptScript;
  package$html.textXJavaScriptScript_uenml0$ = textXJavaScriptScript;
  package$html.textXEcmaScriptScript_uenml0$ = textXEcmaScriptScript;
  package$html.textVbScriptScript_uenml0$ = textVbScriptScript;
  package$html.style_c49j1k$ = style_1;
  package$html.style_tj9h6s$ = style_2;
  package$html.title_4dzm4m$ = title_1;
  package$html.title_3v9ivn$ = title_2;
  package$html.RP = RP;
  package$html.RT = RT;
  package$html.RUBY = RUBY;
  package$html.rt_kderwb$ = rt_0;
  package$html.rp_8bpft5$ = rp_0;
  package$html.get_asFlowContent_2r92kp$ = get_asFlowContent_13;
  package$html.get_asPhrasingContent_2r92kp$ = get_asPhrasingContent_13;
  package$html.P = P;
  package$html.get_asFlowContent_lkq3e3$ = get_asFlowContent_14;
  package$html.get_asPhrasingContent_lkq3e3$ = get_asPhrasingContent_14;
  package$html.PARAM = PARAM;
  package$html.PRE = PRE;
  package$html.get_asFlowContent_6saq7c$ = get_asFlowContent_15;
  package$html.get_asPhrasingContent_6saq7c$ = get_asPhrasingContent_15;
  package$html.PROGRESS = PROGRESS;
  package$html.get_asFlowContent_cpgs6i$ = get_asFlowContent_16;
  package$html.get_asPhrasingContent_cpgs6i$ = get_asPhrasingContent_16;
  package$html.FIELDSET = FIELDSET;
  package$html.legEnd_xzrxko$ = legEnd_0;
  package$html.FIGCAPTION = FIGCAPTION;
  package$html.FIGURE = FIGURE;
  package$html.legEnd_pujkak$ = legEnd_1;
  package$html.figcaption_8j2zdd$ = figcaption_1;
  package$html.FOOTER = FOOTER;
  package$html.FORM = FORM;
  package$html.NAV = NAV;
  package$html.get_asFlowContent_6sccdk$ = get_asFlowContent_17;
  package$html.get_asSectioningContent_6sccdk$ = get_asSectioningContent;
  package$html.NOSCRIPT = NOSCRIPT;
  package$html.get_asFlowContent_hfcz9z$ = get_asFlowContent_18;
  package$html.get_asMetaDataContent_hfcz9z$ = get_asMetaDataContent_0;
  package$html.get_asPhrasingContent_hfcz9z$ = get_asPhrasingContent_17;
  package$html.VAR_ = VAR_;
  package$html.get_asFlowContent_2t3t7v$ = get_asFlowContent_19;
  package$html.get_asPhrasingContent_2t3t7v$ = get_asPhrasingContent_18;
  package$html.VIDEO = VIDEO;
  package$html.source_bzm4az$ = source_0;
  package$html.get_asFlowContent_g5b08w$ = get_asFlowContent_20;
  package$html.get_asInteractiveContent_g5b08w$ = get_asInteractiveContent_4;
  package$html.get_asPhrasingContent_g5b08w$ = get_asPhrasingContent_19;
  package$html.KBD = KBD;
  package$html.get_asFlowContent_6se90y$ = get_asFlowContent_21;
  package$html.get_asPhrasingContent_6se90y$ = get_asPhrasingContent_20;
  package$html.KEYGEN = KEYGEN;
  package$html.get_asFlowContent_hm1wge$ = get_asFlowContent_22;
  package$html.get_asInteractiveContent_hm1wge$ = get_asInteractiveContent_5;
  package$html.get_asPhrasingContent_hm1wge$ = get_asPhrasingContent_21;
  package$html.CommonAttributeGroupFacade = CommonAttributeGroupFacade;
  package$html.get_enableTheming_fxodxh$ = get_enableTheming;
  package$html.set_enableTheming_jqpcbu$ = set_enableTheming;
  package$html.get_enableViewState_fxodxh$ = get_enableViewState;
  package$html.set_enableViewState_jqpcbu$ = set_enableViewState;
  package$html.get_skinID_fxodxh$ = get_skinID;
  package$html.set_skinID_ueiko3$ = set_skinID;
  package$html.get_visible_fxodxh$ = get_visible;
  package$html.set_visible_jqpcbu$ = set_visible;
  package$html.get_accessKey_fxodxh$ = get_accessKey;
  package$html.set_accessKey_ueiko3$ = set_accessKey;
  package$html.get_classes_fxodxh$ = get_classes;
  package$html.set_classes_njy09m$ = set_classes;
  package$html.get_contentEditable_fxodxh$ = get_contentEditable;
  package$html.set_contentEditable_jqpcbu$ = set_contentEditable;
  package$html.get_contextMenu_fxodxh$ = get_contextMenu;
  package$html.set_contextMenu_ueiko3$ = set_contextMenu;
  package$html.get_dataFolderName_fxodxh$ = get_dataFolderName;
  package$html.set_dataFolderName_ueiko3$ = set_dataFolderName;
  package$html.get_dataMsgId_fxodxh$ = get_dataMsgId;
  package$html.set_dataMsgId_ueiko3$ = set_dataMsgId;
  package$html.get_dir_fxodxh$ = get_dir;
  package$html.set_dir_9u487w$ = set_dir;
  package$html.get_draggable_fxodxh$ = get_draggable;
  package$html.set_draggable_5qpbvg$ = set_draggable;
  package$html.get_hidden_fxodxh$ = get_hidden;
  package$html.set_hidden_jqpcbu$ = set_hidden;
  package$html.get_id_fxodxh$ = get_id;
  package$html.set_id_ueiko3$ = set_id;
  package$html.get_itemProp_fxodxh$ = get_itemProp;
  package$html.set_itemProp_ueiko3$ = set_itemProp;
  package$html.get_onAbort_fxodxh$ = get_onAbort;
  package$html.set_onAbort_ueiko3$ = set_onAbort;
  package$html.get_onBlur_fxodxh$ = get_onBlur;
  package$html.set_onBlur_ueiko3$ = set_onBlur;
  package$html.get_onCanPlay_fxodxh$ = get_onCanPlay;
  package$html.set_onCanPlay_ueiko3$ = set_onCanPlay;
  package$html.get_onCanPlayThrough_fxodxh$ = get_onCanPlayThrough;
  package$html.set_onCanPlayThrough_ueiko3$ = set_onCanPlayThrough;
  package$html.get_onChange_fxodxh$ = get_onChange;
  package$html.set_onChange_ueiko3$ = set_onChange;
  package$html.get_onClick_fxodxh$ = get_onClick;
  package$html.set_onClick_ueiko3$ = set_onClick;
  package$html.get_onContextMenu_fxodxh$ = get_onContextMenu;
  package$html.set_onContextMenu_ueiko3$ = set_onContextMenu;
  package$html.get_onDoubleClick_fxodxh$ = get_onDoubleClick;
  package$html.set_onDoubleClick_ueiko3$ = set_onDoubleClick;
  package$html.get_onDrag_fxodxh$ = get_onDrag;
  package$html.set_onDrag_ueiko3$ = set_onDrag;
  package$html.get_onDragEnter_fxodxh$ = get_onDragEnter;
  package$html.set_onDragEnter_ueiko3$ = set_onDragEnter;
  package$html.get_onDragLeave_fxodxh$ = get_onDragLeave;
  package$html.set_onDragLeave_ueiko3$ = set_onDragLeave;
  package$html.get_onDragOver_fxodxh$ = get_onDragOver;
  package$html.set_onDragOver_ueiko3$ = set_onDragOver;
  package$html.get_onDragStart_fxodxh$ = get_onDragStart;
  package$html.set_onDragStart_ueiko3$ = set_onDragStart;
  package$html.get_onDrop_fxodxh$ = get_onDrop;
  package$html.set_onDrop_ueiko3$ = set_onDrop;
  package$html.get_onDurationChange_fxodxh$ = get_onDurationChange;
  package$html.set_onDurationChange_ueiko3$ = set_onDurationChange;
  package$html.get_onEmptied_fxodxh$ = get_onEmptied;
  package$html.set_onEmptied_ueiko3$ = set_onEmptied;
  package$html.get_onEnded_fxodxh$ = get_onEnded;
  package$html.set_onEnded_ueiko3$ = set_onEnded;
  package$html.get_onError_fxodxh$ = get_onError;
  package$html.set_onError_ueiko3$ = set_onError;
  package$html.get_onFocus_fxodxh$ = get_onFocus;
  package$html.set_onFocus_ueiko3$ = set_onFocus;
  package$html.get_onFormChange_fxodxh$ = get_onFormChange;
  package$html.set_onFormChange_ueiko3$ = set_onFormChange;
  package$html.get_onFormInput_fxodxh$ = get_onFormInput;
  package$html.set_onFormInput_ueiko3$ = set_onFormInput;
  package$html.get_onInput_fxodxh$ = get_onInput;
  package$html.set_onInput_ueiko3$ = set_onInput;
  package$html.get_onInvalid_fxodxh$ = get_onInvalid;
  package$html.set_onInvalid_ueiko3$ = set_onInvalid;
  package$html.get_onKeyDown_fxodxh$ = get_onKeyDown;
  package$html.set_onKeyDown_ueiko3$ = set_onKeyDown;
  package$html.get_onKeyPress_fxodxh$ = get_onKeyPress;
  package$html.set_onKeyPress_ueiko3$ = set_onKeyPress;
  package$html.get_onKeyUp_fxodxh$ = get_onKeyUp;
  package$html.set_onKeyUp_ueiko3$ = set_onKeyUp;
  package$html.get_onLoad_fxodxh$ = get_onLoad;
  package$html.set_onLoad_ueiko3$ = set_onLoad;
  package$html.get_onLoadedData_fxodxh$ = get_onLoadedData;
  package$html.set_onLoadedData_ueiko3$ = set_onLoadedData;
  package$html.get_onLoadedMetaData_fxodxh$ = get_onLoadedMetaData;
  package$html.set_onLoadedMetaData_ueiko3$ = set_onLoadedMetaData;
  package$html.get_onLoadStart_fxodxh$ = get_onLoadStart;
  package$html.set_onLoadStart_ueiko3$ = set_onLoadStart;
  package$html.get_onMouseDown_fxodxh$ = get_onMouseDown;
  package$html.set_onMouseDown_ueiko3$ = set_onMouseDown;
  package$html.get_onMouseMove_fxodxh$ = get_onMouseMove;
  package$html.set_onMouseMove_ueiko3$ = set_onMouseMove;
  package$html.get_onMouseOut_fxodxh$ = get_onMouseOut;
  package$html.set_onMouseOut_ueiko3$ = set_onMouseOut;
  package$html.get_onMouseOver_fxodxh$ = get_onMouseOver;
  package$html.set_onMouseOver_ueiko3$ = set_onMouseOver;
  package$html.get_onMouseUp_fxodxh$ = get_onMouseUp;
  package$html.set_onMouseUp_ueiko3$ = set_onMouseUp;
  package$html.get_onMouseWheel_fxodxh$ = get_onMouseWheel;
  package$html.set_onMouseWheel_ueiko3$ = set_onMouseWheel;
  package$html.get_onPause_fxodxh$ = get_onPause;
  package$html.set_onPause_ueiko3$ = set_onPause;
  package$html.get_onPlay_fxodxh$ = get_onPlay;
  package$html.set_onPlay_ueiko3$ = set_onPlay;
  package$html.get_onPlaying_fxodxh$ = get_onPlaying;
  package$html.set_onPlaying_ueiko3$ = set_onPlaying;
  package$html.get_onProgress_fxodxh$ = get_onProgress;
  package$html.set_onProgress_ueiko3$ = set_onProgress;
  package$html.get_onRateChange_fxodxh$ = get_onRateChange;
  package$html.set_onRateChange_ueiko3$ = set_onRateChange;
  package$html.get_onReadyStateChange_fxodxh$ = get_onReadyStateChange;
  package$html.set_onReadyStateChange_ueiko3$ = set_onReadyStateChange;
  package$html.get_onScroll_fxodxh$ = get_onScroll;
  package$html.set_onScroll_ueiko3$ = set_onScroll;
  package$html.get_onSeeked_fxodxh$ = get_onSeeked;
  package$html.set_onSeeked_ueiko3$ = set_onSeeked;
  package$html.get_onSeeking_fxodxh$ = get_onSeeking;
  package$html.set_onSeeking_ueiko3$ = set_onSeeking;
  package$html.get_onSelect_fxodxh$ = get_onSelect;
  package$html.set_onSelect_ueiko3$ = set_onSelect;
  package$html.get_onShow_fxodxh$ = get_onShow;
  package$html.set_onShow_ueiko3$ = set_onShow;
  package$html.get_onStalled_fxodxh$ = get_onStalled;
  package$html.set_onStalled_ueiko3$ = set_onStalled;
  package$html.get_onSubmit_fxodxh$ = get_onSubmit;
  package$html.set_onSubmit_ueiko3$ = set_onSubmit;
  package$html.get_onSuspend_fxodxh$ = get_onSuspend;
  package$html.set_onSuspend_ueiko3$ = set_onSuspend;
  package$html.get_onTimeUpdate_fxodxh$ = get_onTimeUpdate;
  package$html.set_onTimeUpdate_ueiko3$ = set_onTimeUpdate;
  package$html.get_onVolumeChange_fxodxh$ = get_onVolumeChange;
  package$html.set_onVolumeChange_ueiko3$ = set_onVolumeChange;
  package$html.get_onWaiting_fxodxh$ = get_onWaiting;
  package$html.set_onWaiting_ueiko3$ = set_onWaiting;
  package$html.get_role_fxodxh$ = get_role;
  package$html.set_role_ueiko3$ = set_role;
  package$html.get_runAt_fxodxh$ = get_runAt;
  package$html.set_runAt_62sup9$ = set_runAt;
  package$html.get_spellCheck_fxodxh$ = get_spellCheck;
  package$html.set_spellCheck_jqpcbu$ = set_spellCheck;
  package$html.get_style_fxodxh$ = get_style;
  package$html.set_style_ueiko3$ = set_style;
  package$html.get_subject_fxodxh$ = get_subject;
  package$html.set_subject_ueiko3$ = set_subject;
  package$html.get_tabIndex_fxodxh$ = get_tabIndex;
  package$html.set_tabIndex_ueiko3$ = set_tabIndex;
  package$html.get_title_fxodxh$ = get_title;
  package$html.set_title_ueiko3$ = set_title;
  package$html.FormServerAttributeGroupFacade = FormServerAttributeGroupFacade;
  package$html.get_defaultButton_eyr2db$ = get_defaultButton;
  package$html.set_defaultButton_pr6dup$ = set_defaultButton;
  package$html.get_defaultFocus_eyr2db$ = get_defaultFocus;
  package$html.set_defaultFocus_pr6dup$ = set_defaultFocus;
  package$html.get_submitDisabledControls_eyr2db$ = get_submitDisabledControls;
  package$html.set_submitDisabledControls_f4mavu$ = set_submitDisabledControls;
  package$html.InputServerAttributeGroupFacade = InputServerAttributeGroupFacade;
  package$html.get_causesValidation_1b5w33$ = get_causesValidation;
  package$html.set_causesValidation_jnmo2c$ = set_causesValidation;
  package$html.get_validationGroup_1b5w33$ = get_validationGroup;
  package$html.set_validationGroup_3yp3w3$ = set_validationGroup;
  package$html.SelectServerAttributeGroupFacade = SelectServerAttributeGroupFacade;
  package$html.get_dataSourceID_6ojqtj$ = get_dataSourceID;
  package$html.set_dataSourceID_6l8dwp$ = set_dataSourceID;
  package$html.get_dataTextField_6ojqtj$ = get_dataTextField;
  package$html.set_dataTextField_6l8dwp$ = set_dataTextField;
  package$html.get_dataValueField_6ojqtj$ = get_dataValueField;
  package$html.set_dataValueField_6l8dwp$ = set_dataValueField;
  package$html.CommonAttributeGroupFacadeFlowHeadingContent = CommonAttributeGroupFacadeFlowHeadingContent;
  package$html.CommonAttributeGroupFacadeFlowHeadingPhrasingContent = CommonAttributeGroupFacadeFlowHeadingPhrasingContent;
  package$html.CommonAttributeGroupFacadeFlowInteractiveContent = CommonAttributeGroupFacadeFlowInteractiveContent;
  package$html.CommonAttributeGroupFacadeFlowInteractivePhrasingContent = CommonAttributeGroupFacadeFlowInteractivePhrasingContent;
  package$html.CommonAttributeGroupFacadeFlowMetaDataContent = CommonAttributeGroupFacadeFlowMetaDataContent;
  package$html.CommonAttributeGroupFacadeFlowMetaDataPhrasingContent = CommonAttributeGroupFacadeFlowMetaDataPhrasingContent;
  package$html.HtmlBlockInlineTag = HtmlBlockInlineTag;
  package$html.CommonAttributeGroupFacadeFlowSectioningContent = CommonAttributeGroupFacadeFlowSectioningContent;
  package$html.FlowMetaDataContent = FlowMetaDataContent;
  package$html.FlowMetaDataPhrasingContent = FlowMetaDataPhrasingContent;
  package$html.FlowPhrasingContent = FlowPhrasingContent;
  package$html.HtmlBlockTag = HtmlBlockTag;
  package$html.HtmlHeadTag = HtmlHeadTag;
  package$html.HtmlInlineTag = HtmlInlineTag;
  package$html.SAMP = SAMP;
  package$html.get_asFlowContent_2rgbde$ = get_asFlowContent_23;
  package$html.get_asPhrasingContent_2rgbde$ = get_asPhrasingContent_22;
  package$html.SCRIPT = SCRIPT;
  package$html.get_asFlowContent_rq40oo$ = get_asFlowContent_24;
  package$html.get_asMetaDataContent_rq40oo$ = get_asMetaDataContent_1;
  package$html.get_asPhrasingContent_rq40oo$ = get_asPhrasingContent_23;
  package$html.SECTION = SECTION;
  package$html.get_asFlowContent_tj5cra$ = get_asFlowContent_25;
  package$html.get_asSectioningContent_tj5cra$ = get_asSectioningContent_0;
  package$html.SELECT = SELECT;
  package$html.option_xfiiwk$ = option_3;
  package$html.option_1u6wsa$ = option_4;
  package$html.optGroup_okqskg$ = optGroup_0;
  package$html.get_asFlowContent_sktobr$ = get_asFlowContent_26;
  package$html.get_asInteractiveContent_sktobr$ = get_asInteractiveContent_6;
  package$html.get_asPhrasingContent_sktobr$ = get_asPhrasingContent_24;
  package$html.SMALL = SMALL;
  package$html.get_asFlowContent_esbjlg$ = get_asFlowContent_27;
  package$html.get_asPhrasingContent_esbjlg$ = get_asPhrasingContent_25;
  package$html.SOURCE = SOURCE;
  package$html.SPAN = SPAN;
  package$html.get_asFlowContent_2rpn89$ = get_asFlowContent_28;
  package$html.get_asPhrasingContent_2rpn89$ = get_asPhrasingContent_26;
  package$html.STRONG = STRONG;
  package$html.get_asFlowContent_z94ogk$ = get_asFlowContent_29;
  package$html.get_asPhrasingContent_z94ogk$ = get_asPhrasingContent_27;
  package$html.STYLE = STYLE;
  package$html.get_asFlowContent_ewlf9m$ = get_asFlowContent_30;
  package$html.get_asMetaDataContent_ewlf9m$ = get_asMetaDataContent_2;
  package$html.SUB = SUB;
  package$html.get_asFlowContent_6s8r39$ = get_asFlowContent_31;
  package$html.get_asPhrasingContent_6s8r39$ = get_asPhrasingContent_28;
  package$html.SUP = SUP;
  package$html.get_asFlowContent_6s8qr7$ = get_asFlowContent_32;
  package$html.get_asPhrasingContent_6s8qr7$ = get_asPhrasingContent_29;
  package$html.SVG = SVG;
  package$html.get_asFlowContent_6s8q89$ = get_asFlowContent_33;
  package$html.get_asPhrasingContent_6s8q89$ = get_asPhrasingContent_30;
  package$html.a_5skjyn$ = a_0;
  package$html.abbr_6inr0p$ = abbr_0;
  package$html.address_a2fi0u$ = address_1;
  package$html.area_itdnqx$ = area_0;
  package$html.article_m04wvw$ = article_0;
  package$html.aside_p5o5s6$ = aside_0;
  package$html.audio_pitgtg$ = audio_0;
  package$html.b_pw134g$ = b_0;
  package$html.base_kuydqv$ = base_1;
  package$html.bdi_yt7dfv$ = bdi_0;
  package$html.bdo_xzrhyz$ = bdo_0;
  package$html.blockQuote_kqn8r$ = blockQuote_1;
  package$html.body_z1rdug$ = body_0;
  package$html.br_msntey$ = br_0;
  package$html.button_lzqaus$ = button_0;
  package$html.canvas_89i3hl$ = canvas_1;
  package$html.canvas_q2368u$ = canvas_2;
  package$html.caption_7tv3ws$ = caption_1;
  package$html.cite_1ndov1$ = cite_0;
  package$html.code_c7b9vx$ = code_0;
  package$html.col_dptvv2$ = col_0;
  package$html.colGroup_y3yo5h$ = colGroup_1;
  package$html.command_n3gfsd$ = command_1;
  package$html.dataList_7wdw0e$ = dataList_0;
  package$html.dd_ufas1y$ = dd_0;
  package$html.del_ks3snt$ = del_0;
  package$html.details_lsny6o$ = details_0;
  package$html.dfn_qz8qfa$ = dfn_0;
  package$html.dialog_tmuuku$ = dialog_1;
  package$html.div_59el9d$ = div_1;
  package$html.dl_jwau0i$ = dl_1;
  package$html.dt_t7lw6$ = dt_0;
  package$html.em_83d4cy$ = em_0;
  package$html.embed_93iexz$ = embed_0;
  package$html.fieldSet_wmxr1q$ = fieldSet_1;
  package$html.figcaption_cm1syw$ = figcaption_2;
  package$html.figure_fnm6ty$ = figure_1;
  package$html.footer_x2k50h$ = footer_1;
  package$html.form_3ereno$ = form_1;
  package$html.h1_qzc46n$ = h1_0;
  package$html.h2_wky4k0$ = h2_0;
  package$html.h3_l44bbj$ = h3_0;
  package$html.h4_9nai32$ = h4_0;
  package$html.h5_1tjb5f$ = h5_0;
  package$html.h6_dad4dw$ = h6_0;
  package$html.head_i7x5xd$ = head_0;
  package$html.header_dwfinh$ = header_1;
  package$html.hGroup_o3ebz7$ = hGroup_0;
  package$html.hr_ks0ewg$ = hr_1;
  package$html.html_dq808k$ = html_0;
  package$html.i_gncgg9$ = i_0;
  package$html.iframe_i3obeb$ = iframe_1;
  package$html.iframe_k7pgs2$ = iframe_2;
  package$html.img_45d5o1$ = img_0;
  package$html.input_mm0abt$ = input_0;
  package$html.ins_e5g22k$ = ins_0;
  package$html.kbd_10o0fv$ = kbd_0;
  package$html.keyGen_19nnnk$ = keyGen_0;
  package$html.label_j811c2$ = label_0;
  package$html.legEnd_99jryr$ = legEnd_2;
  package$html.li_jf6zlv$ = li_2;
  package$html.link_hbbg0w$ = link_1;
  package$html.map_r08uhb$ = map_1;
  package$html.mark_m8f11v$ = mark_0;
  package$html.math_bhulte$ = math_0;
  package$html.mathml_89i3hl$ = mathml_1;
  package$html.mathml_fvpj0z$ = mathml_2;
  package$html.meta_qjokje$ = meta_1;
  package$html.meter_akdp07$ = meter_0;
  package$html.nav_pa7bap$ = nav_0;
  package$html.noScript_z591w2$ = noScript_1;
  package$html.object__7o73rm$ = object__0;
  package$html.ol_g73xel$ = ol_1;
  package$html.optGroup_3qzn6b$ = optGroup_1;
  package$html.option_89i3hl$ = option_5;
  package$html.option_k09m0r$ = option_6;
  package$html.output_q3di9l$ = output_0;
  package$html.p_7ents2$ = p_1;
  package$html.param_k9rdkw$ = param_1;
  package$html.pre_1138nj$ = pre_1;
  package$html.progress_j8bckz$ = progress_0;
  package$html.q_425zgf$ = q_0;
  package$html.rp_uoj0sk$ = rp_1;
  package$html.rt_5iq7rc$ = rt_1;
  package$html.ruby_d6wtb4$ = ruby_0;
  package$html.samp_sdlho7$ = samp_0;
  package$html.script_3sbaix$ = script_1;
  package$html.script_howm5d$ = script_2;
  package$html.section_ezs79p$ = section_0;
  package$html.select_ty59tq$ = select_0;
  package$html.small_fm3dud$ = small_0;
  package$html.source_naaf4v$ = source_1;
  package$html.span_fqsp1s$ = span_0;
  package$html.strong_k099i5$ = strong_0;
  package$html.style_89i3hl$ = style_3;
  package$html.style_x3xo8v$ = style_4;
  package$html.sub_35684y$ = sub_0;
  package$html.sup_fc717g$ = sup_0;
  package$html.svg_89i3hl$ = svg_1;
  package$html.svg_gi1bim$ = svg_2;
  package$html.table_llpdic$ = table_1;
  package$html.tbody_ojrhk4$ = tbody_1;
  package$html.td_z82v7u$ = td_1;
  package$html.textArea_i2mn62$ = textArea_1;
  package$html.textArea_wfpz2l$ = textArea_2;
  package$html.tfoot_eqq100$ = tfoot_1;
  package$html.th_cjoo5$ = th_1;
  package$html.thead_fwe93y$ = thead_1;
  package$html.time_or12qb$ = time_0;
  package$html.title_qjf5rw$ = title_3;
  package$html.title_pc70yd$ = title_4;
  package$html.tr_gqplvg$ = tr_4;
  package$html.ul_e6giw3$ = ul_1;
  package$html.var__z94im6$ = var__0;
  package$html.video_7h26o9$ = video_0;
  package$html.DATALIST = DATALIST;
  package$html.option_uctrsw$ = option_7;
  package$html.option_j20sia$ = option_8;
  package$html.get_asFlowContent_2i51lx$ = get_asFlowContent_34;
  package$html.get_asPhrasingContent_2i51lx$ = get_asPhrasingContent_31;
  package$html.DD = DD;
  package$html.DEL = DEL;
  package$html.get_asFlowContent_6sinio$ = get_asFlowContent_35;
  package$html.get_asPhrasingContent_6sinio$ = get_asPhrasingContent_32;
  package$html.DETAILS = DETAILS;
  package$html.legEnd_vwmtm2$ = legEnd_3;
  package$html.get_asFlowContent_v4s00p$ = get_asFlowContent_36;
  package$html.get_asInteractiveContent_v4s00p$ = get_asInteractiveContent_7;
  package$html.DFN = DFN;
  package$html.get_asFlowContent_6simq9$ = get_asFlowContent_37;
  package$html.get_asPhrasingContent_6simq9$ = get_asPhrasingContent_33;
  package$html.DIALOG = DIALOG;
  package$html.DIV = DIV;
  package$html.DL = DL;
  package$html.dd_xoxdrp$ = dd_1;
  package$html.dt_a2ff2z$ = dt_1;
  package$html.DT = DT;
  package$html.LABEL = LABEL;
  package$html.get_asFlowContent_baf5if$ = get_asFlowContent_38;
  package$html.get_asInteractiveContent_baf5if$ = get_asInteractiveContent_8;
  package$html.get_asPhrasingContent_baf5if$ = get_asPhrasingContent_34;
  package$html.LEGEND = LEGEND;
  package$html.get_asFlowContent_37l0ga$ = get_asFlowContent_39;
  package$html.get_asPhrasingContent_37l0ga$ = get_asPhrasingContent_35;
  package$html.LI = LI;
  package$html.LINK = LINK;
  package$html.get_asFlowContent_2nqvqh$ = get_asFlowContent_40;
  package$html.get_asMetaDataContent_2nqvqh$ = get_asMetaDataContent_3;
  package$html.get_asPhrasingContent_2nqvqh$ = get_asPhrasingContent_36;
  package$html.Q = Q;
  package$html.get_asFlowContent_lkq3ey$ = get_asFlowContent_41;
  package$html.get_asPhrasingContent_lkq3ey$ = get_asPhrasingContent_37;
  package$html.B = B;
  package$html.get_asFlowContent_lkq321$ = get_asFlowContent_42;
  package$html.get_asPhrasingContent_lkq321$ = get_asPhrasingContent_38;
  package$html.BASE = BASE;
  package$html.BDI = BDI;
  package$html.get_asFlowContent_6sjyb0$ = get_asFlowContent_43;
  package$html.get_asPhrasingContent_6sjyb0$ = get_asPhrasingContent_39;
  package$html.BDO = BDO;
  package$html.get_asFlowContent_6sjy5u$ = get_asFlowContent_44;
  package$html.get_asPhrasingContent_6sjy5u$ = get_asPhrasingContent_40;
  package$html.BLOCKQUOTE = BLOCKQUOTE;
  package$html.BODY = BODY;
  package$html.BR = BR;
  package$html.get_asFlowContent_tkg5ub$ = get_asFlowContent_45;
  package$html.get_asPhrasingContent_tkg5ub$ = get_asPhrasingContent_41;
  package$html.BUTTON = BUTTON;
  package$html.get_asFlowContent_56uxb$ = get_asFlowContent_46;
  package$html.get_asInteractiveContent_56uxb$ = get_asInteractiveContent_9;
  package$html.get_asPhrasingContent_56uxb$ = get_asPhrasingContent_42;
  package$html.A = A;
  package$html.get_asFlowContent_lkq316$ = get_asFlowContent_47;
  package$html.get_asInteractiveContent_lkq316$ = get_asInteractiveContent_10;
  package$html.get_asPhrasingContent_lkq316$ = get_asPhrasingContent_43;
  package$html.ABBR = ABBR;
  package$html.get_asFlowContent_2hkfki$ = get_asFlowContent_48;
  package$html.get_asPhrasingContent_2hkfki$ = get_asPhrasingContent_44;
  package$html.ADDRESS = ADDRESS;
  package$html.AREA = AREA;
  package$html.get_asFlowContent_2hup6e$ = get_asFlowContent_49;
  package$html.get_asPhrasingContent_2hup6e$ = get_asPhrasingContent_45;
  package$html.ARTICLE = ARTICLE;
  package$html.get_asFlowContent_6gvbq3$ = get_asFlowContent_50;
  package$html.get_asSectioningContent_6gvbq3$ = get_asSectioningContent_1;
  package$html.ASIDE = ASIDE;
  package$html.get_asFlowContent_6cy1ur$ = get_asFlowContent_51;
  package$html.get_asSectioningContent_6cy1ur$ = get_asSectioningContent_2;
  package$html.AUDIO = AUDIO;
  package$html.source_73nwfk$ = source_2;
  package$html.get_asFlowContent_6dyk1x$ = get_asFlowContent_52;
  package$html.get_asInteractiveContent_6dyk1x$ = get_asInteractiveContent_11;
  package$html.get_asPhrasingContent_6dyk1x$ = get_asPhrasingContent_46;
  package$html.CANVAS = CANVAS;
  package$html.get_asFlowContent_4z17kb$ = get_asFlowContent_53;
  package$html.get_asPhrasingContent_4z17kb$ = get_asPhrasingContent_47;
  package$html.CAPTION = CAPTION;
  package$html.CITE = CITE;
  package$html.get_asFlowContent_2isup8$ = get_asFlowContent_54;
  package$html.get_asPhrasingContent_2isup8$ = get_asPhrasingContent_48;
  package$html.CODE = CODE;
  package$html.get_asFlowContent_2iwcra$ = get_asFlowContent_55;
  package$html.get_asPhrasingContent_2iwcra$ = get_asPhrasingContent_49;
  package$html.COL = COL;
  package$html.COLGROUP = COLGROUP;
  package$html.col_bjbitg$ = col_1;
  package$html.COMMAND = COMMAND;
  package$html.get_asFlowContent_3w1cts$ = get_asFlowContent_56;
  package$html.get_asMetaDataContent_3w1cts$ = get_asMetaDataContent_4;
  package$html.get_asPhrasingContent_3w1cts$ = get_asPhrasingContent_50;
  package$html.FlowOrHeadingContent = FlowOrHeadingContent;
  package$html.FlowOrMetaDataContent = FlowOrMetaDataContent;
  package$html.FlowOrInteractiveContent = FlowOrInteractiveContent;
  package$html.FlowOrPhrasingContent = FlowOrPhrasingContent;
  package$html.FlowOrPhrasingOrMetaDataContent = FlowOrPhrasingOrMetaDataContent;
  package$html.SectioningOrFlowContent = SectioningOrFlowContent;
  package$html.FlowOrInteractiveOrPhrasingContent = FlowOrInteractiveOrPhrasingContent;
  package$html.h1_vmej1w$ = h1_1;
  package$html.h2_eh5gi3$ = h2_1;
  package$html.h3_agelx2$ = h3_1;
  package$html.h4_zdyoc7$ = h4_1;
  package$html.h5_aplb7s$ = h5_1;
  package$html.h6_e7yr7d$ = h6_1;
  package$html.hGroup_sxozs2$ = hGroup_1;
  package$html.style_st6e4p$ = style_5;
  package$html.style_6skwa3$ = style_6;
  package$html.details_d9zf4h$ = details_1;
  package$html.abbr_2n6hpy$ = abbr_1;
  package$html.area_sgglka$ = area_1;
  package$html.rectArea_oj03en$ = rectArea;
  package$html.circleArea_oj03en$ = circleArea;
  package$html.polyArea_oj03en$ = polyArea;
  package$html.defaultArea_oj03en$ = defaultArea;
  package$html.b_r0mnq7$ = b_1;
  package$html.bdi_le8e1m$ = bdi_1;
  package$html.bdo_dv43h0$ = bdo_1;
  package$html.br_5bz84p$ = br_1;
  package$html.canvas_dwb9fz$ = canvas_3;
  package$html.canvas_jd2cqk$ = canvas_4;
  package$html.cite_3ozg0$ = cite_1;
  package$html.code_en26pm$ = code_1;
  package$html.dataList_o7wjj3$ = dataList_1;
  package$html.del_iothfu$ = del_1;
  package$html.dfn_ax4ydx$ = dfn_1;
  package$html.em_2lgk3j$ = em_1;
  package$html.i_5g1p9k$ = i_1;
  package$html.ins_g1dqgd$ = ins_1;
  package$html.kbd_18bd9o$ = kbd_1;
  package$html.map_km2leq$ = map_2;
  package$html.mark_zaxnru$ = mark_1;
  package$html.math_f2p7j5$ = math_1;
  package$html.meter_8zh648$ = meter_1;
  package$html.output_ttsfoa$ = output_1;
  package$html.progress_6mi6o6$ = progress_1;
  package$html.q_86txao$ = q_1;
  package$html.ruby_wobulv$ = ruby_1;
  package$html.samp_wmuy2y$ = samp_1;
  package$html.small_69ofui$ = small_1;
  package$html.span_6djfml$ = span_1;
  package$html.strong_okpg28$ = strong_1;
  package$html.sub_u07n5t$ = sub_1;
  package$html.sup_yx52tp$ = sup_1;
  package$html.svg_f6i49v$ = svg_3;
  package$html.svg_jd2cqk$ = svg_4;
  package$html.time_80zgyi$ = time_1;
  package$html.var__ut2z69$ = var__1;
  package$html.command_nc8zde$ = command_2;
  package$html.commandCommand_y2j548$ = commandCommand_0;
  package$html.checkBoxCommand_y2j548$ = checkBoxCommand_0;
  package$html.radioCommand_y2j548$ = radioCommand_0;
  package$html.link_gyx145$ = link_2;
  package$html.meta_6k5fb9$ = meta_2;
  package$html.noScript_59ebhl$ = noScript_2;
  package$html.script_h2m3fm$ = script_3;
  package$html.textEcmaScriptScript_jkqsdm$ = textEcmaScriptScript_0;
  package$html.textJavaScriptScript_jkqsdm$ = textJavaScriptScript_0;
  package$html.textJavaScript10Script_jkqsdm$ = textJavaScript10Script_0;
  package$html.textJavaScript11Script_jkqsdm$ = textJavaScript11Script_0;
  package$html.textJavaScript12Script_jkqsdm$ = textJavaScript12Script_0;
  package$html.textJavaScript13Script_jkqsdm$ = textJavaScript13Script_0;
  package$html.textJavaScript14Script_jkqsdm$ = textJavaScript14Script_0;
  package$html.textJavaScript15Script_jkqsdm$ = textJavaScript15Script_0;
  package$html.textJScriptScript_jkqsdm$ = textJScriptScript_0;
  package$html.textXJavaScriptScript_jkqsdm$ = textXJavaScriptScript_0;
  package$html.textXEcmaScriptScript_jkqsdm$ = textXEcmaScriptScript_0;
  package$html.textVbScriptScript_jkqsdm$ = textVbScriptScript_0;
  package$html.article_hpv6ge$ = article_1;
  package$html.aside_3uzs4w$ = aside_1;
  package$html.nav_19d8h1$ = nav_1;
  package$html.section_ac1jhf$ = section_1;
  package$html.a_gu26kr$ = a_1;
  package$html.audio_hb8i2y$ = audio_1;
  package$html.button_whohl6$ = button_1;
  package$html.getButton_2ghcrw$ = getButton;
  package$html.postButton_2ghcrw$ = postButton;
  package$html.putButton_2ghcrw$ = putButton;
  package$html.deleteButton_2ghcrw$ = deleteButton;
  package$html.embed_l7ro7h$ = embed_1;
  package$html.iframe_rz24s4$ = iframe_3;
  package$html.iframe_9ubjn9$ = iframe_4;
  package$html.allowSameOriginIframe_yk32s8$ = allowSameOriginIframe;
  package$html.allowFormSIframe_yk32s8$ = allowFormSIframe;
  package$html.allowScriptsIframe_yk32s8$ = allowScriptsIframe;
  package$html.allowSameOriginIframe_lm6cex$ = allowSameOriginIframe_0;
  package$html.allowFormSIframe_lm6cex$ = allowFormSIframe_0;
  package$html.allowScriptsIframe_lm6cex$ = allowScriptsIframe_0;
  package$html.img_evw26v$ = img_1;
  package$html.input_e1g74z$ = input_1;
  package$html.buttonInput_ap9uf6$ = buttonInput;
  package$html.checkBoxInput_ap9uf6$ = checkBoxInput;
  package$html.colorInput_ap9uf6$ = colorInput;
  package$html.dateInput_ap9uf6$ = dateInput;
  package$html.dateTimeInput_ap9uf6$ = dateTimeInput;
  package$html.dateTimeLocalInput_ap9uf6$ = dateTimeLocalInput;
  package$html.emailInput_ap9uf6$ = emailInput;
  package$html.fileInput_ap9uf6$ = fileInput;
  package$html.hiddenInput_ap9uf6$ = hiddenInput;
  package$html.imageInput_ap9uf6$ = imageInput;
  package$html.monthInput_ap9uf6$ = monthInput;
  package$html.numberInput_ap9uf6$ = numberInput;
  package$html.passwordInput_ap9uf6$ = passwordInput;
  package$html.radioInput_ap9uf6$ = radioInput;
  package$html.rangeInput_ap9uf6$ = rangeInput;
  package$html.resetInput_ap9uf6$ = resetInput;
  package$html.searchInput_ap9uf6$ = searchInput;
  package$html.submitInput_ap9uf6$ = submitInput;
  package$html.textInput_ap9uf6$ = textInput;
  package$html.telInput_ap9uf6$ = telInput;
  package$html.timeInput_ap9uf6$ = timeInput;
  package$html.urlInput_ap9uf6$ = urlInput;
  package$html.weekInput_ap9uf6$ = weekInput;
  package$html.keyGen_h5okci$ = keyGen_1;
  package$html.rsaKeyGen_7fxx9n$ = rsaKeyGen;
  package$html.label_yd75js$ = label_1;
  package$html.object__ix0ywc$ = object__1;
  package$html.select_9klr40$ = select_1;
  package$html.textArea_b1tfd9$ = textArea_3;
  package$html.textArea_n0vc64$ = textArea_4;
  package$html.hardTextArea_skdnmm$ = hardTextArea;
  package$html.softTextArea_skdnmm$ = softTextArea;
  package$html.hardTextArea_p7xx2x$ = hardTextArea_0;
  package$html.softTextArea_p7xx2x$ = softTextArea_0;
  package$html.video_qpg29b$ = video_1;
  package$html.EM = EM;
  package$html.get_asFlowContent_tkg7y3$ = get_asFlowContent_57;
  package$html.get_asPhrasingContent_tkg7y3$ = get_asPhrasingContent_51;
  package$html.EMBED = EMBED;
  package$html.get_asFlowContent_85pboi$ = get_asFlowContent_58;
  package$html.get_asInteractiveContent_85pboi$ = get_asInteractiveContent_12;
  package$html.get_asPhrasingContent_85pboi$ = get_asPhrasingContent_52;
  package$html.H1 = H1;
  package$html.H2 = H2;
  package$html.H3 = H3;
  package$html.H4 = H4;
  package$html.H5 = H5;
  package$html.H6 = H6;
  package$html.HEAD = HEAD;
  package$html.HEADER = HEADER;
  package$html.HGROUP = HGROUP;
  package$html.h1_31khfp$ = h1_2;
  package$html.h2_rz4juu$ = h2_2;
  package$html.h3_i4ffp5$ = h3_2;
  package$html.h4_6t4mq0$ = h4_2;
  package$html.h5_vqop55$ = h5_2;
  package$html.h6_ecvaeu$ = h6_2;
  package$html.get_asFlowContent_a89fak$ = get_asFlowContent_59;
  package$html.get_asHeadingContent_a89fak$ = get_asHeadingContent;
  package$html.HR = HR;
  package$html.HTML = HTML;
  package$html.body_qwuuhi$ = body_1;
  package$html.head_cwj6vx$ = head_1;
  Object.defineProperty(Entities, 'nbsp', {
    get: Entities$nbsp_getInstance
  });
  Object.defineProperty(Entities, 'lt', {
    get: Entities$lt_getInstance
  });
  Object.defineProperty(Entities, 'gt', {
    get: Entities$gt_getInstance
  });
  Object.defineProperty(Entities, 'quot', {
    get: Entities$quot_getInstance
  });
  Object.defineProperty(Entities, 'amp', {
    get: Entities$amp_getInstance
  });
  Object.defineProperty(Entities, 'apos', {
    get: Entities$apos_getInstance
  });
  Object.defineProperty(Entities, 'iexcl', {
    get: Entities$iexcl_getInstance
  });
  Object.defineProperty(Entities, 'cent', {
    get: Entities$cent_getInstance
  });
  Object.defineProperty(Entities, 'pound', {
    get: Entities$pound_getInstance
  });
  Object.defineProperty(Entities, 'curren', {
    get: Entities$curren_getInstance
  });
  Object.defineProperty(Entities, 'yen', {
    get: Entities$yen_getInstance
  });
  Object.defineProperty(Entities, 'brvbar', {
    get: Entities$brvbar_getInstance
  });
  Object.defineProperty(Entities, 'sect', {
    get: Entities$sect_getInstance
  });
  Object.defineProperty(Entities, 'uml', {
    get: Entities$uml_getInstance
  });
  Object.defineProperty(Entities, 'copy', {
    get: Entities$copy_getInstance
  });
  Object.defineProperty(Entities, 'ordf', {
    get: Entities$ordf_getInstance
  });
  Object.defineProperty(Entities, 'laquo', {
    get: Entities$laquo_getInstance
  });
  Object.defineProperty(Entities, 'not', {
    get: Entities$not_getInstance
  });
  Object.defineProperty(Entities, 'shy', {
    get: Entities$shy_getInstance
  });
  Object.defineProperty(Entities, 'reg', {
    get: Entities$reg_getInstance
  });
  Object.defineProperty(Entities, 'macr', {
    get: Entities$macr_getInstance
  });
  Object.defineProperty(Entities, 'deg', {
    get: Entities$deg_getInstance
  });
  Object.defineProperty(Entities, 'plusmn', {
    get: Entities$plusmn_getInstance
  });
  Object.defineProperty(Entities, 'sup2', {
    get: Entities$sup2_getInstance
  });
  Object.defineProperty(Entities, 'sup3', {
    get: Entities$sup3_getInstance
  });
  Object.defineProperty(Entities, 'acute', {
    get: Entities$acute_getInstance
  });
  Object.defineProperty(Entities, 'micro', {
    get: Entities$micro_getInstance
  });
  Object.defineProperty(Entities, 'para', {
    get: Entities$para_getInstance
  });
  Object.defineProperty(Entities, 'middot', {
    get: Entities$middot_getInstance
  });
  Object.defineProperty(Entities, 'cedil', {
    get: Entities$cedil_getInstance
  });
  Object.defineProperty(Entities, 'sup1', {
    get: Entities$sup1_getInstance
  });
  Object.defineProperty(Entities, 'ordm', {
    get: Entities$ordm_getInstance
  });
  Object.defineProperty(Entities, 'raquo', {
    get: Entities$raquo_getInstance
  });
  Object.defineProperty(Entities, 'frac14', {
    get: Entities$frac14_getInstance
  });
  Object.defineProperty(Entities, 'frac12', {
    get: Entities$frac12_getInstance
  });
  Object.defineProperty(Entities, 'frac34', {
    get: Entities$frac34_getInstance
  });
  Object.defineProperty(Entities, 'iquest', {
    get: Entities$iquest_getInstance
  });
  Object.defineProperty(Entities, 'Agrave', {
    get: Entities$Agrave_getInstance
  });
  Object.defineProperty(Entities, 'Aacute', {
    get: Entities$Aacute_getInstance
  });
  Object.defineProperty(Entities, 'Acirc', {
    get: Entities$Acirc_getInstance
  });
  Object.defineProperty(Entities, 'Atilde', {
    get: Entities$Atilde_getInstance
  });
  Object.defineProperty(Entities, 'Auml', {
    get: Entities$Auml_getInstance
  });
  Object.defineProperty(Entities, 'Aring', {
    get: Entities$Aring_getInstance
  });
  Object.defineProperty(Entities, 'AElig', {
    get: Entities$AElig_getInstance
  });
  Object.defineProperty(Entities, 'Ccedil', {
    get: Entities$Ccedil_getInstance
  });
  Object.defineProperty(Entities, 'Egrave', {
    get: Entities$Egrave_getInstance
  });
  Object.defineProperty(Entities, 'Eacute', {
    get: Entities$Eacute_getInstance
  });
  Object.defineProperty(Entities, 'Ecirc', {
    get: Entities$Ecirc_getInstance
  });
  Object.defineProperty(Entities, 'Euml', {
    get: Entities$Euml_getInstance
  });
  Object.defineProperty(Entities, 'Igrave', {
    get: Entities$Igrave_getInstance
  });
  Object.defineProperty(Entities, 'Iacute', {
    get: Entities$Iacute_getInstance
  });
  Object.defineProperty(Entities, 'Icirc', {
    get: Entities$Icirc_getInstance
  });
  Object.defineProperty(Entities, 'Iuml', {
    get: Entities$Iuml_getInstance
  });
  Object.defineProperty(Entities, 'ETH', {
    get: Entities$ETH_getInstance
  });
  Object.defineProperty(Entities, 'Ntilde', {
    get: Entities$Ntilde_getInstance
  });
  Object.defineProperty(Entities, 'Ograve', {
    get: Entities$Ograve_getInstance
  });
  Object.defineProperty(Entities, 'Oacute', {
    get: Entities$Oacute_getInstance
  });
  Object.defineProperty(Entities, 'Ocirc', {
    get: Entities$Ocirc_getInstance
  });
  Object.defineProperty(Entities, 'Otilde', {
    get: Entities$Otilde_getInstance
  });
  Object.defineProperty(Entities, 'Ouml', {
    get: Entities$Ouml_getInstance
  });
  Object.defineProperty(Entities, 'times', {
    get: Entities$times_getInstance
  });
  Object.defineProperty(Entities, 'Oslash', {
    get: Entities$Oslash_getInstance
  });
  Object.defineProperty(Entities, 'Ugrave', {
    get: Entities$Ugrave_getInstance
  });
  Object.defineProperty(Entities, 'Uacute', {
    get: Entities$Uacute_getInstance
  });
  Object.defineProperty(Entities, 'Ucirc', {
    get: Entities$Ucirc_getInstance
  });
  Object.defineProperty(Entities, 'Uuml', {
    get: Entities$Uuml_getInstance
  });
  Object.defineProperty(Entities, 'Yacute', {
    get: Entities$Yacute_getInstance
  });
  Object.defineProperty(Entities, 'THORN', {
    get: Entities$THORN_getInstance
  });
  Object.defineProperty(Entities, 'szlig', {
    get: Entities$szlig_getInstance
  });
  Object.defineProperty(Entities, 'agrave', {
    get: Entities$agrave_getInstance
  });
  Object.defineProperty(Entities, 'aacute', {
    get: Entities$aacute_getInstance
  });
  Object.defineProperty(Entities, 'acirc', {
    get: Entities$acirc_getInstance
  });
  Object.defineProperty(Entities, 'atilde', {
    get: Entities$atilde_getInstance
  });
  Object.defineProperty(Entities, 'auml', {
    get: Entities$auml_getInstance
  });
  Object.defineProperty(Entities, 'aring', {
    get: Entities$aring_getInstance
  });
  Object.defineProperty(Entities, 'aelig', {
    get: Entities$aelig_getInstance
  });
  Object.defineProperty(Entities, 'ccedil', {
    get: Entities$ccedil_getInstance
  });
  Object.defineProperty(Entities, 'egrave', {
    get: Entities$egrave_getInstance
  });
  Object.defineProperty(Entities, 'eacute', {
    get: Entities$eacute_getInstance
  });
  Object.defineProperty(Entities, 'ecirc', {
    get: Entities$ecirc_getInstance
  });
  Object.defineProperty(Entities, 'euml', {
    get: Entities$euml_getInstance
  });
  Object.defineProperty(Entities, 'igrave', {
    get: Entities$igrave_getInstance
  });
  Object.defineProperty(Entities, 'iacute', {
    get: Entities$iacute_getInstance
  });
  Object.defineProperty(Entities, 'icirc', {
    get: Entities$icirc_getInstance
  });
  Object.defineProperty(Entities, 'iuml', {
    get: Entities$iuml_getInstance
  });
  Object.defineProperty(Entities, 'eth', {
    get: Entities$eth_getInstance
  });
  Object.defineProperty(Entities, 'ntilde', {
    get: Entities$ntilde_getInstance
  });
  Object.defineProperty(Entities, 'ograve', {
    get: Entities$ograve_getInstance
  });
  Object.defineProperty(Entities, 'oacute', {
    get: Entities$oacute_getInstance
  });
  Object.defineProperty(Entities, 'ocirc', {
    get: Entities$ocirc_getInstance
  });
  Object.defineProperty(Entities, 'otilde', {
    get: Entities$otilde_getInstance
  });
  Object.defineProperty(Entities, 'ouml', {
    get: Entities$ouml_getInstance
  });
  Object.defineProperty(Entities, 'divide', {
    get: Entities$divide_getInstance
  });
  Object.defineProperty(Entities, 'oslash', {
    get: Entities$oslash_getInstance
  });
  Object.defineProperty(Entities, 'ugrave', {
    get: Entities$ugrave_getInstance
  });
  Object.defineProperty(Entities, 'uacute', {
    get: Entities$uacute_getInstance
  });
  Object.defineProperty(Entities, 'ucirc', {
    get: Entities$ucirc_getInstance
  });
  Object.defineProperty(Entities, 'uuml', {
    get: Entities$uuml_getInstance
  });
  Object.defineProperty(Entities, 'yacute', {
    get: Entities$yacute_getInstance
  });
  Object.defineProperty(Entities, 'thorn', {
    get: Entities$thorn_getInstance
  });
  Object.defineProperty(Entities, 'yuml', {
    get: Entities$yuml_getInstance
  });
  package$html.Entities = Entities;
  package$html.styleLink_hlvmud$ = styleLink;
  package$html.get_br_6s7ubj$ = get_br;
  package$consumers.TraceConsumer = TraceConsumer;
  package$consumers.trace_y1nvlf$ = trace_0;
  package$html.HTMLTag = HTMLTag;
  package$consumers.FinalizeConsumer = FinalizeConsumer;
  package$consumers.onFinalize_fnbzu2$ = onFinalize;
  package$consumers.onFinalizeMap_dpqpuj$ = onFinalizeMap;
  package$html.TagConsumer = TagConsumer;
  package$html.Tag = Tag;
  package$html.Unsafe = Unsafe;
  package$html.AttributeEnum = AttributeEnum;
  package$html.visit_xwv8ym$ = visit;
  package$html.visitAndFinalize_g9qte5$ = visitAndFinalize;
  package$html.attributesMapOf = attributesMapOf_1;
  package$html.attributesMapOf_jyasbz$ = attributesMapOf_0;
  package$html.attributesMapOf_alerag$ = attributesMapOf;
  package$html.singletonMapOf_puj7f4$ = singletonMapOf;
  package$html.unsafe_vdrn79$ = unsafe;
  Object.defineProperty(package$html, 'emptyMap', {
    get: function() {
      return emptyMap;
    }
  });
  package$html.DefaultUnsafe = DefaultUnsafe;
  package$html.HtmlTagMarker = HtmlTagMarker;
  Object.defineProperty(package$consumers, 'PredicateResults', {
    get: PredicateResults_getInstance
  });
  Object.defineProperty(PredicateResult, 'PASS', {
    get: PredicateResult$PASS_getInstance
  });
  Object.defineProperty(PredicateResult, 'SKIP', {
    get: PredicateResult$SKIP_getInstance
  });
  Object.defineProperty(PredicateResult, 'DROP', {
    get: PredicateResult$DROP_getInstance
  });
  package$consumers.PredicateResult = PredicateResult;
  package$consumers.filter_8vynzr$ = filter_0;
  AVERAGE_PAGE_SIZE = 32768;
  escapeMap = mapOf([to(Kotlin.toBoxedChar(60), '&lt;'), to(Kotlin.toBoxedChar(62), '&gt;'), to(Kotlin.toBoxedChar(38), '&amp;'), to(Kotlin.toBoxedChar(39), '&apos;'), to(Kotlin.toBoxedChar(34), '&quot;')]);
  letterRangeLowerCase = new CharRange(97, 122);
  letterRangeUpperCase = new CharRange(65, 90);
  digitRange = new CharRange(48, 57);
  var $receiver = Dir$values();
  var capacity = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver.length), 16);
  var destination = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity);
  var tmp$;
  for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
    var element = $receiver[tmp$];
    destination.put_xwzc9p$(element.realValue, element);
  }
  dirValues = destination;
  var $receiver_0 = Draggable$values();
  var capacity_0 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_0.length), 16);
  var destination_0 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_0);
  var tmp$_0;
  for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
    var element_0 = $receiver_0[tmp$_0];
    destination_0.put_xwzc9p$(element_0.realValue, element_0);
  }
  draggableValues = destination_0;
  var $receiver_1 = RunAt$values();
  var capacity_1 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_1.length), 16);
  var destination_1 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_1);
  var tmp$_1;
  for (tmp$_1 = 0; tmp$_1 !== $receiver_1.length; ++tmp$_1) {
    var element_1 = $receiver_1[tmp$_1];
    destination_1.put_xwzc9p$(element_1.realValue, element_1);
  }
  runAtValues = destination_1;
  var $receiver_2 = AreaShape$values();
  var capacity_2 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_2.length), 16);
  var destination_2 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_2);
  var tmp$_2;
  for (tmp$_2 = 0; tmp$_2 !== $receiver_2.length; ++tmp$_2) {
    var element_2 = $receiver_2[tmp$_2];
    destination_2.put_xwzc9p$(element_2.realValue, element_2);
  }
  areaShapeValues = destination_2;
  var $receiver_3 = ButtonFormEncType$values();
  var capacity_3 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_3.length), 16);
  var destination_3 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_3);
  var tmp$_3;
  for (tmp$_3 = 0; tmp$_3 !== $receiver_3.length; ++tmp$_3) {
    var element_3 = $receiver_3[tmp$_3];
    destination_3.put_xwzc9p$(element_3.realValue, element_3);
  }
  buttonFormEncTypeValues = destination_3;
  var $receiver_4 = ButtonFormMethod$values();
  var capacity_4 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_4.length), 16);
  var destination_4 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_4);
  var tmp$_4;
  for (tmp$_4 = 0; tmp$_4 !== $receiver_4.length; ++tmp$_4) {
    var element_4 = $receiver_4[tmp$_4];
    destination_4.put_xwzc9p$(element_4.realValue, element_4);
  }
  buttonFormMethodValues = destination_4;
  var $receiver_5 = ButtonType$values();
  var capacity_5 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_5.length), 16);
  var destination_5 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_5);
  var tmp$_5;
  for (tmp$_5 = 0; tmp$_5 !== $receiver_5.length; ++tmp$_5) {
    var element_5 = $receiver_5[tmp$_5];
    destination_5.put_xwzc9p$(element_5.realValue, element_5);
  }
  buttonTypeValues = destination_5;
  var $receiver_6 = CommandType$values();
  var capacity_6 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_6.length), 16);
  var destination_6 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_6);
  var tmp$_6;
  for (tmp$_6 = 0; tmp$_6 !== $receiver_6.length; ++tmp$_6) {
    var element_6 = $receiver_6[tmp$_6];
    destination_6.put_xwzc9p$(element_6.realValue, element_6);
  }
  commandTypeValues = destination_6;
  var $receiver_7 = FormEncType$values();
  var capacity_7 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_7.length), 16);
  var destination_7 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_7);
  var tmp$_7;
  for (tmp$_7 = 0; tmp$_7 !== $receiver_7.length; ++tmp$_7) {
    var element_7 = $receiver_7[tmp$_7];
    destination_7.put_xwzc9p$(element_7.realValue, element_7);
  }
  formEncTypeValues = destination_7;
  var $receiver_8 = FormMethod$values();
  var capacity_8 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_8.length), 16);
  var destination_8 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_8);
  var tmp$_8;
  for (tmp$_8 = 0; tmp$_8 !== $receiver_8.length; ++tmp$_8) {
    var element_8 = $receiver_8[tmp$_8];
    destination_8.put_xwzc9p$(element_8.realValue, element_8);
  }
  formMethodValues = destination_8;
  var $receiver_9 = IframeSandbox$values();
  var capacity_9 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_9.length), 16);
  var destination_9 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_9);
  var tmp$_9;
  for (tmp$_9 = 0; tmp$_9 !== $receiver_9.length; ++tmp$_9) {
    var element_9 = $receiver_9[tmp$_9];
    destination_9.put_xwzc9p$(element_9.realValue, element_9);
  }
  iframeSandboxValues = destination_9;
  var $receiver_10 = InputType$values();
  var capacity_10 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_10.length), 16);
  var destination_10 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_10);
  var tmp$_10;
  for (tmp$_10 = 0; tmp$_10 !== $receiver_10.length; ++tmp$_10) {
    var element_10 = $receiver_10[tmp$_10];
    destination_10.put_xwzc9p$(element_10.realValue, element_10);
  }
  inputTypeValues = destination_10;
  var $receiver_11 = InputFormEncType$values();
  var capacity_11 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_11.length), 16);
  var destination_11 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_11);
  var tmp$_11;
  for (tmp$_11 = 0; tmp$_11 !== $receiver_11.length; ++tmp$_11) {
    var element_11 = $receiver_11[tmp$_11];
    destination_11.put_xwzc9p$(element_11.realValue, element_11);
  }
  inputFormEncTypeValues = destination_11;
  var $receiver_12 = InputFormMethod$values();
  var capacity_12 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_12.length), 16);
  var destination_12 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_12);
  var tmp$_12;
  for (tmp$_12 = 0; tmp$_12 !== $receiver_12.length; ++tmp$_12) {
    var element_12 = $receiver_12[tmp$_12];
    destination_12.put_xwzc9p$(element_12.realValue, element_12);
  }
  inputFormMethodValues = destination_12;
  var $receiver_13 = KeyGenKeyType$values();
  var capacity_13 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_13.length), 16);
  var destination_13 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_13);
  var tmp$_13;
  for (tmp$_13 = 0; tmp$_13 !== $receiver_13.length; ++tmp$_13) {
    var element_13 = $receiver_13[tmp$_13];
    destination_13.put_xwzc9p$(element_13.realValue, element_13);
  }
  keyGenKeyTypeValues = destination_13;
  var $receiver_14 = ScriptType$values();
  var capacity_14 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_14.length), 16);
  var destination_14 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_14);
  var tmp$_14;
  for (tmp$_14 = 0; tmp$_14 !== $receiver_14.length; ++tmp$_14) {
    var element_14 = $receiver_14[tmp$_14];
    destination_14.put_xwzc9p$(element_14.realValue, element_14);
  }
  scriptTypeValues = destination_14;
  var $receiver_15 = TextAreaWrap$values();
  var capacity_15 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_15.length), 16);
  var destination_15 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_15);
  var tmp$_15;
  for (tmp$_15 = 0; tmp$_15 !== $receiver_15.length; ++tmp$_15) {
    var element_15 = $receiver_15[tmp$_15];
    destination_15.put_xwzc9p$(element_15.realValue, element_15);
  }
  textAreaWrapValues = destination_15;
  var $receiver_16 = ThScope$values();
  var capacity_16 = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$(Kotlin.kotlin.collections.mapCapacity_za3lpa$($receiver_16.length), 16);
  var destination_16 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(capacity_16);
  var tmp$_16;
  for (tmp$_16 = 0; tmp$_16 !== $receiver_16.length; ++tmp$_16) {
    var element_16 = $receiver_16[tmp$_16];
    destination_16.put_xwzc9p$(element_16.realValue, element_16);
  }
  thScopeValues = destination_16;
  attributeStringString = new StringAttribute();
  attributeSetStringStringSet = new StringSetAttribute();
  attributeBooleanBoolean = new BooleanAttribute();
  attributeBooleanBooleanOnOff = new BooleanAttribute('on', 'off');
  attributeBooleanTicker = new TickerAttribute();
  attributeButtonFormEncTypeEnumButtonFormEncTypeValues = new EnumAttribute(buttonFormEncTypeValues);
  attributeButtonFormMethodEnumButtonFormMethodValues = new EnumAttribute(buttonFormMethodValues);
  attributeButtonTypeEnumButtonTypeValues = new EnumAttribute(buttonTypeValues);
  attributeCommandTypeEnumCommandTypeValues = new EnumAttribute(commandTypeValues);
  attributeDirEnumDirValues = new EnumAttribute(dirValues);
  attributeDraggableEnumDraggableValues = new EnumAttribute(draggableValues);
  attributeFormEncTypeEnumFormEncTypeValues = new EnumAttribute(formEncTypeValues);
  attributeFormMethodEnumFormMethodValues = new EnumAttribute(formMethodValues);
  attributeIframeSandboxEnumIframeSandboxValues = new EnumAttribute(iframeSandboxValues);
  attributeInputFormEncTypeEnumInputFormEncTypeValues = new EnumAttribute(inputFormEncTypeValues);
  attributeInputFormMethodEnumInputFormMethodValues = new EnumAttribute(inputFormMethodValues);
  attributeInputTypeEnumInputTypeValues = new EnumAttribute(inputTypeValues);
  attributeKeyGenKeyTypeEnumKeyGenKeyTypeValues = new EnumAttribute(keyGenKeyTypeValues);
  attributeRunAtEnumRunAtValues = new EnumAttribute(runAtValues);
  attributeScriptTypeEnumScriptTypeValues = new EnumAttribute(scriptTypeValues);
  attributeTextAreaWrapEnumTextAreaWrapValues = new EnumAttribute(textAreaWrapValues);
  attributeThScopeEnumThScopeValues = new EnumAttribute(thScopeValues);
  emptyMap = emptyMap_0();
  Kotlin.defineModule('kotlinx-html-js', _);
  return _;
}));

//@ sourceMappingURL=kotlinx-html-js.js.map
