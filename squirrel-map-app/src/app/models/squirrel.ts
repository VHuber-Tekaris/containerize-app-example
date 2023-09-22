export class Squirrel {

    public AreaName!: string;
    public AreaID!: string;
    public ParkName!: string;
    public ParkID!: number;
    public SquirrelID!: string;
    public PrimaryFurColor!: string;
    public HighlightsInFurColor!: string;
    public ColorNotes!: string;
    public Location!: string;
    public OtherNotes!: string;
    public AboveGroundFeet!: number;
    public SpecificLocation!: string;
    public Activities!: string;
    public InteractionsWithHumans!: string;
    public Latitude!: number;
    public Longitude!: number;


    public constructor(init?:Partial<Squirrel>) {
        Object.assign(this, init);
    }
}