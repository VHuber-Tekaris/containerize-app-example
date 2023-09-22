export class Park {
    public AreaName!: string;
    public AreaID!: string;
    public ParkName!: string;
    public ParkID!: number;
    public Date!: string;
    public StartTime!: string;
    public EndTime!: string;
    public TotalTimeMinutes!: number;
    public ParkConditions!: string;
    public OtherAnimalSightings!: string;
    public Litter!: string;
    public TemperatureWeather!: string;
    public SquirrelSighters!: number;
    public NrOfSighters!: number;

    public constructor(init?: Partial<Park>) {
        Object.assign(this, init);
    }
}