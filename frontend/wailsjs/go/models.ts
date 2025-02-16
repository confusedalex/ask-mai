export namespace config {
	
	export class WebKitInspectorConfig {
	    OpenInspectorOnStartup: boolean;
	    HttpServerAddress: string;
	
	    static createFrom(source: any = {}) {
	        return new WebKitInspectorConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.OpenInspectorOnStartup = source["OpenInspectorOnStartup"];
	        this.HttpServerAddress = source["HttpServerAddress"];
	    }
	}
	export class VueDevToolsConfig {
	    Host: string;
	    Port: number;
	
	    static createFrom(source: any = {}) {
	        return new VueDevToolsConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Host = source["Host"];
	        this.Port = source["Port"];
	    }
	}
	export class DebugConfig {
	    LogLevel: number;
	    PprofAddress: string;
	    VueDevTools: VueDevToolsConfig;
	    WebKit: WebKitInspectorConfig;
	    EnableCrashDetection: boolean;
	    RestartShortcut: Shortcut;
	    PrintVersion: boolean;
	
	    static createFrom(source: any = {}) {
	        return new DebugConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.LogLevel = source["LogLevel"];
	        this.PprofAddress = source["PprofAddress"];
	        this.VueDevTools = this.convertValues(source["VueDevTools"], VueDevToolsConfig);
	        this.WebKit = this.convertValues(source["WebKit"], WebKitInspectorConfig);
	        this.EnableCrashDetection = source["EnableCrashDetection"];
	        this.RestartShortcut = this.convertValues(source["RestartShortcut"], Shortcut);
	        this.PrintVersion = source["PrintVersion"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class PrinterConfig {
	    Format: string;
	    Targets: any[];
	    TargetsRaw: string[];
	
	    static createFrom(source: any = {}) {
	        return new PrinterConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Format = source["Format"];
	        this.Targets = source["Targets"];
	        this.TargetsRaw = source["TargetsRaw"];
	    }
	}
	export class FileDialogConfig {
	    DefaultDirectory: string;
	    ShowHiddenFiles: boolean;
	    CanCreateDirectories: boolean;
	    ResolveAliases: boolean;
	    TreatPackagesAsDirectories: boolean;
	    FilterDisplay: string[];
	    FilterPattern: string[];
	
	    static createFrom(source: any = {}) {
	        return new FileDialogConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.DefaultDirectory = source["DefaultDirectory"];
	        this.ShowHiddenFiles = source["ShowHiddenFiles"];
	        this.CanCreateDirectories = source["CanCreateDirectories"];
	        this.ResolveAliases = source["ResolveAliases"];
	        this.TreatPackagesAsDirectories = source["TreatPackagesAsDirectories"];
	        this.FilterDisplay = source["FilterDisplay"];
	        this.FilterPattern = source["FilterPattern"];
	    }
	}
	export class Shortcut {
	    Code: string;
	    Alt: boolean;
	    Ctrl: boolean;
	    Meta: boolean;
	    Shift: boolean;
	
	    static createFrom(source: any = {}) {
	        return new Shortcut(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Code = source["Code"];
	        this.Alt = source["Alt"];
	        this.Ctrl = source["Ctrl"];
	        this.Meta = source["Meta"];
	        this.Shift = source["Shift"];
	    }
	}
	export class PromptConfig {
	    InitValue: string;
	    InitAttachments: string[];
	    MinRows: number;
	    MaxRows: number;
	    PinTop: boolean;
	    SubmitShortcut: Shortcut;
	
	    static createFrom(source: any = {}) {
	        return new PromptConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.InitValue = source["InitValue"];
	        this.InitAttachments = source["InitAttachments"];
	        this.MinRows = source["MinRows"];
	        this.MaxRows = source["MaxRows"];
	        this.PinTop = source["PinTop"];
	        this.SubmitShortcut = this.convertValues(source["SubmitShortcut"], Shortcut);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class WindowBackgroundColor {
	    R: number;
	    G: number;
	    B: number;
	    A: number;
	
	    static createFrom(source: any = {}) {
	        return new WindowBackgroundColor(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.R = source["R"];
	        this.G = source["G"];
	        this.B = source["B"];
	        this.A = source["A"];
	    }
	}
	export class ExpressionContainer {
	    Expression: string;
	    Value: number;
	
	    static createFrom(source: any = {}) {
	        return new ExpressionContainer(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Expression = source["Expression"];
	        this.Value = source["Value"];
	    }
	}
	export class WindowConfig {
	    Title: string;
	    InitialWidth: ExpressionContainer;
	    MaxHeight: ExpressionContainer;
	    InitialPositionX: ExpressionContainer;
	    InitialPositionY: ExpressionContainer;
	    InitialZoom: ExpressionContainer;
	    BackgroundColor: WindowBackgroundColor;
	    StartState: number;
	    AlwaysOnTop: boolean;
	    GrowTop: boolean;
	    Frameless: boolean;
	    Resizeable: boolean;
	    Translucent: string;
	
	    static createFrom(source: any = {}) {
	        return new WindowConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Title = source["Title"];
	        this.InitialWidth = this.convertValues(source["InitialWidth"], ExpressionContainer);
	        this.MaxHeight = this.convertValues(source["MaxHeight"], ExpressionContainer);
	        this.InitialPositionX = this.convertValues(source["InitialPositionX"], ExpressionContainer);
	        this.InitialPositionY = this.convertValues(source["InitialPositionY"], ExpressionContainer);
	        this.InitialZoom = this.convertValues(source["InitialZoom"], ExpressionContainer);
	        this.BackgroundColor = this.convertValues(source["BackgroundColor"], WindowBackgroundColor);
	        this.StartState = source["StartState"];
	        this.AlwaysOnTop = source["AlwaysOnTop"];
	        this.GrowTop = source["GrowTop"];
	        this.Frameless = source["Frameless"];
	        this.Resizeable = source["Resizeable"];
	        this.Translucent = source["Translucent"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class UIConfig {
	    Window: WindowConfig;
	    Prompt: PromptConfig;
	    FileDialog: FileDialogConfig;
	    Stream: boolean;
	    QuitShortcut: Shortcut;
	    Theme: string;
	    MinMaxPosition: string;
	    CodeStyle: string;
	    Language: string;
	
	    static createFrom(source: any = {}) {
	        return new UIConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Window = this.convertValues(source["Window"], WindowConfig);
	        this.Prompt = this.convertValues(source["Prompt"], PromptConfig);
	        this.FileDialog = this.convertValues(source["FileDialog"], FileDialogConfig);
	        this.Stream = source["Stream"];
	        this.QuitShortcut = this.convertValues(source["QuitShortcut"], Shortcut);
	        this.Theme = source["Theme"];
	        this.MinMaxPosition = source["MinMaxPosition"];
	        this.CodeStyle = source["CodeStyle"];
	        this.Language = source["Language"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Config {
	    UI: UIConfig;
	    LLM: llm.LLMConfig;
	    Printer: PrinterConfig;
	    Debug: DebugConfig;
	    Config: string;
	
	    static createFrom(source: any = {}) {
	        return new Config(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.UI = this.convertValues(source["UI"], UIConfig);
	        this.LLM = this.convertValues(source["LLM"], llm.LLMConfig);
	        this.Printer = this.convertValues(source["Printer"], PrinterConfig);
	        this.Debug = this.convertValues(source["Debug"], DebugConfig);
	        this.Config = source["Config"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	
	
	
	
	
	
	

}

export namespace controller {
	
	export class AssetMeta {
	    Path: string;
	    Url: string;
	    MimeType: string;
	
	    static createFrom(source: any = {}) {
	        return new AssetMeta(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Path = source["Path"];
	        this.Url = source["Url"];
	        this.MimeType = source["MimeType"];
	    }
	}
	export class LLMMessageContentPart {
	    Type: string;
	    Content: string;
	
	    static createFrom(source: any = {}) {
	        return new LLMMessageContentPart(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Type = source["Type"];
	        this.Content = source["Content"];
	    }
	}
	export class LLMMessage {
	    Role: string;
	    ContentParts: LLMMessageContentPart[];
	
	    static createFrom(source: any = {}) {
	        return new LLMMessage(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Role = source["Role"];
	        this.ContentParts = this.convertValues(source["ContentParts"], LLMMessageContentPart);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class LLMAskArgs {
	    History: LLMMessage[];
	
	    static createFrom(source: any = {}) {
	        return new LLMAskArgs(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.History = this.convertValues(source["History"], LLMMessage);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	export class OpenFileDialogArgs {
	    Title: string;
	
	    static createFrom(source: any = {}) {
	        return new OpenFileDialogArgs(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Title = source["Title"];
	    }
	}

}

export namespace llm {
	
	export class AnthropicConfig {
	    Token: string;
	    BaseUrl: string;
	    Model: string;
	
	    static createFrom(source: any = {}) {
	        return new AnthropicConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Token = source["Token"];
	        this.BaseUrl = source["BaseUrl"];
	        this.Model = source["Model"];
	    }
	}
	export class AnythingLLMConfig {
	    BaseURL: string;
	    Token: string;
	    Workspace: string;
	
	    static createFrom(source: any = {}) {
	        return new AnythingLLMConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.BaseURL = source["BaseURL"];
	        this.Token = source["Token"];
	        this.Workspace = source["Workspace"];
	    }
	}
	export class CallOptionsConfig {
	    SystemPrompt: string;
	    MaxToken: number;
	    Temperature: number;
	    TopK: number;
	    TopP: number;
	    MinLength: number;
	    MaxLength: number;
	
	    static createFrom(source: any = {}) {
	        return new CallOptionsConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.SystemPrompt = source["SystemPrompt"];
	        this.MaxToken = source["MaxToken"];
	        this.Temperature = source["Temperature"];
	        this.TopK = source["TopK"];
	        this.TopP = source["TopP"];
	        this.MinLength = source["MinLength"];
	        this.MaxLength = source["MaxLength"];
	    }
	}
	export class MistralConfig {
	    ApiKey: string;
	    Endpoint: string;
	    Model: string;
	
	    static createFrom(source: any = {}) {
	        return new MistralConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ApiKey = source["ApiKey"];
	        this.Endpoint = source["Endpoint"];
	        this.Model = source["Model"];
	    }
	}
	export class OllamaConfig {
	    ServerURL: string;
	    Model: string;
	
	    static createFrom(source: any = {}) {
	        return new OllamaConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ServerURL = source["ServerURL"];
	        this.Model = source["Model"];
	    }
	}
	export class OpenAIConfig {
	    APIKey: string;
	    APIType: string;
	    APIVersion: string;
	    Model: string;
	    BaseUrl: string;
	    Organization: string;
	
	    static createFrom(source: any = {}) {
	        return new OpenAIConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.APIKey = source["APIKey"];
	        this.APIType = source["APIType"];
	        this.APIVersion = source["APIVersion"];
	        this.Model = source["Model"];
	        this.BaseUrl = source["BaseUrl"];
	        this.Organization = source["Organization"];
	    }
	}
	export class LocalAIConfig {
	    APIKey: string;
	    Model: string;
	    BaseUrl: string;
	
	    static createFrom(source: any = {}) {
	        return new LocalAIConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.APIKey = source["APIKey"];
	        this.Model = source["Model"];
	        this.BaseUrl = source["BaseUrl"];
	    }
	}
	export class LLMConfig {
	    Backend: string;
	    LocalAI: LocalAIConfig;
	    OpenAI: OpenAIConfig;
	    AnythingLLM: AnythingLLMConfig;
	    Ollama: OllamaConfig;
	    Mistral: MistralConfig;
	    Anthropic: AnthropicConfig;
	    CallOptions: CallOptionsConfig;
	
	    static createFrom(source: any = {}) {
	        return new LLMConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Backend = source["Backend"];
	        this.LocalAI = this.convertValues(source["LocalAI"], LocalAIConfig);
	        this.OpenAI = this.convertValues(source["OpenAI"], OpenAIConfig);
	        this.AnythingLLM = this.convertValues(source["AnythingLLM"], AnythingLLMConfig);
	        this.Ollama = this.convertValues(source["Ollama"], OllamaConfig);
	        this.Mistral = this.convertValues(source["Mistral"], MistralConfig);
	        this.Anthropic = this.convertValues(source["Anthropic"], AnthropicConfig);
	        this.CallOptions = this.convertValues(source["CallOptions"], CallOptionsConfig);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	

}

