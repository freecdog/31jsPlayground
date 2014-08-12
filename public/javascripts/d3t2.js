/**
 * Created by jaric on 11.08.2014.
 */

/*var flare = {
    "name": "flare",
    "children": [
        {
            "name": "analytics",
            "children": [
                {
                    "name": "cluster",
                    "children": [
                        {"name": "AgglomerativeCluster", "size": 3938},
                        {"name": "CommunityStructure", "size": 3812},
                        {"name": "HierarchicalCluster", "size": 6714},
                        {"name": "MergeEdge", "size": 743}
                    ]
                },
                {
                    "name": "graph",
                    "children": [
                        {"name": "BetweennessCentrality", "size": 3534},
                        {"name": "LinkDistance", "size": 5731},
                        {"name": "MaxFlowMinCut", "size": 7840},
                        {"name": "ShortestPaths", "size": 5914},
                        {"name": "SpanningTree", "size": 3416}
                    ]
                },
                {
                    "name": "optimization",
                    "children": [
                        {"name": "AspectRatioBanker", "size": 7074}
                    ]
                }
            ]
        },
        {
            "name": "animate",
            "children": [
                {"name": "Easing", "size": 17010},
                {"name": "FunctionSequence", "size": 5842},
                {
                    "name": "interpolate",
                    "children": [
                        {"name": "ArrayInterpolator", "size": 1983},
                        {"name": "ColorInterpolator", "size": 2047},
                        {"name": "DateInterpolator", "size": 1375},
                        {"name": "Interpolator", "size": 8746},
                        {"name": "MatrixInterpolator", "size": 2202},
                        {"name": "NumberInterpolator", "size": 1382},
                        {"name": "ObjectInterpolator", "size": 1629},
                        {"name": "PointInterpolator", "size": 1675},
                        {"name": "RectangleInterpolator", "size": 2042}
                    ]
                },
                {"name": "ISchedulable", "size": 1041},
                {"name": "Parallel", "size": 5176},
                {"name": "Pause", "size": 449},
                {"name": "Scheduler", "size": 5593},
                {"name": "Sequence", "size": 5534},
                {"name": "Transition", "size": 9201},
                {"name": "Transitioner", "size": 19975},
                {"name": "TransitionEvent", "size": 1116},
                {"name": "Tween", "size": 6006}
            ]
        },
        {
            "name": "data",
            "children": [
                {
                    "name": "converters",
                    "children": [
                        {"name": "Converters", "size": 721},
                        {"name": "DelimitedTextConverter", "size": 4294},
                        {"name": "GraphMLConverter", "size": 9800},
                        {"name": "IDataConverter", "size": 1314},
                        {"name": "JSONConverter", "size": 2220}
                    ]
                },
                {"name": "DataField", "size": 1759},
                {"name": "DataSchema", "size": 2165},
                {"name": "DataSet", "size": 586},
                {"name": "DataSource", "size": 3331},
                {"name": "DataTable", "size": 772},
                {"name": "DataUtil", "size": 3322}
            ]
        },
        {
            "name": "display",
            "children": [
                {"name": "DirtySprite", "size": 8833},
                {"name": "LineSprite", "size": 1732},
                {"name": "RectSprite", "size": 3623},
                {"name": "TextSprite", "size": 10066}
            ]
        },
        {
            "name": "flex",
            "children": [
                {"name": "FlareVis", "size": 4116}
            ]
        },
        {
            "name": "physics",
            "children": [
                {"name": "DragForce", "size": 1082},
                {"name": "GravityForce", "size": 1336},
                {"name": "IForce", "size": 319},
                {"name": "NBodyForce", "size": 10498},
                {"name": "Particle", "size": 2822},
                {"name": "Simulation", "size": 9983},
                {"name": "Spring", "size": 2213},
                {"name": "SpringForce", "size": 1681}
            ]
        },
        {
            "name": "query",
            "children": [
                {"name": "AggregateExpression", "size": 1616},
                {"name": "And", "size": 1027},
                {"name": "Arithmetic", "size": 3891},
                {"name": "Average", "size": 891},
                {"name": "BinaryExpression", "size": 2893},
                {"name": "Comparison", "size": 5103},
                {"name": "CompositeExpression", "size": 3677},
                {"name": "Count", "size": 781},
                {"name": "DateUtil", "size": 4141},
                {"name": "Distinct", "size": 933},
                {"name": "Expression", "size": 5130},
                {"name": "ExpressionIterator", "size": 3617},
                {"name": "Fn", "size": 3240},
                {"name": "If", "size": 2732},
                {"name": "IsA", "size": 2039},
                {"name": "Literal", "size": 1214},
                {"name": "Match", "size": 3748},
                {"name": "Maximum", "size": 843},
                {
                    "name": "methods",
                    "children": [
                        {"name": "add", "size": 593},
                        {"name": "and", "size": 330},
                        {"name": "average", "size": 287},
                        {"name": "count", "size": 277},
                        {"name": "distinct", "size": 292},
                        {"name": "div", "size": 595},
                        {"name": "eq", "size": 594},
                        {"name": "fn", "size": 460},
                        {"name": "gt", "size": 603},
                        {"name": "gte", "size": 625},
                        {"name": "iff", "size": 748},
                        {"name": "isa", "size": 461},
                        {"name": "lt", "size": 597},
                        {"name": "lte", "size": 619},
                        {"name": "max", "size": 283},
                        {"name": "min", "size": 283},
                        {"name": "mod", "size": 591},
                        {"name": "mul", "size": 603},
                        {"name": "neq", "size": 599},
                        {"name": "not", "size": 386},
                        {"name": "or", "size": 323},
                        {"name": "orderby", "size": 307},
                        {"name": "range", "size": 772},
                        {"name": "select", "size": 296},
                        {"name": "stddev", "size": 363},
                        {"name": "sub", "size": 600},
                        {"name": "sum", "size": 280},
                        {"name": "update", "size": 307},
                        {"name": "variance", "size": 335},
                        {"name": "where", "size": 299},
                        {"name": "xor", "size": 354},
                        {"name": "_", "size": 264}
                    ]
                },
                {"name": "Minimum", "size": 843},
                {"name": "Not", "size": 1554},
                {"name": "Or", "size": 970},
                {"name": "Query", "size": 13896},
                {"name": "Range", "size": 1594},
                {"name": "StringUtil", "size": 4130},
                {"name": "Sum", "size": 791},
                {"name": "Variable", "size": 1124},
                {"name": "Variance", "size": 1876},
                {"name": "Xor", "size": 1101}
            ]
        },
        {
            "name": "scale",
            "children": [
                {"name": "IScaleMap", "size": 2105},
                {"name": "LinearScale", "size": 1316},
                {"name": "LogScale", "size": 3151},
                {"name": "OrdinalScale", "size": 3770},
                {"name": "QuantileScale", "size": 2435},
                {"name": "QuantitativeScale", "size": 4839},
                {"name": "RootScale", "size": 1756},
                {"name": "Scale", "size": 4268},
                {"name": "ScaleType", "size": 1821},
                {"name": "TimeScale", "size": 5833}
            ]
        },
        {
            "name": "util",
            "children": [
                {"name": "Arrays", "size": 8258},
                {"name": "Colors", "size": 10001},
                {"name": "Dates", "size": 8217},
                {"name": "Displays", "size": 12555},
                {"name": "Filter", "size": 2324},
                {"name": "Geometry", "size": 10993},
                {
                    "name": "heap",
                    "children": [
                        {"name": "FibonacciHeap", "size": 9354},
                        {"name": "HeapNode", "size": 1233}
                    ]
                },
                {"name": "IEvaluable", "size": 335},
                {"name": "IPredicate", "size": 383},
                {"name": "IValueProxy", "size": 874},
                {
                    "name": "math",
                    "children": [
                        {"name": "DenseMatrix", "size": 3165},
                        {"name": "IMatrix", "size": 2815},
                        {"name": "SparseMatrix", "size": 3366}
                    ]
                },
                {"name": "Maths", "size": 17705},
                {"name": "Orientation", "size": 1486},
                {
                    "name": "palette",
                    "children": [
                        {"name": "ColorPalette", "size": 6367},
                        {"name": "Palette", "size": 1229},
                        {"name": "ShapePalette", "size": 2059},
                        {"name": "SizePalette", "size": 2291}
                    ]
                },
                {"name": "Property", "size": 5559},
                {"name": "Shapes", "size": 19118},
                {"name": "Sort", "size": 6887},
                {"name": "Stats", "size": 6557},
                {"name": "Strings", "size": 22026}
            ]
        },
        {
            "name": "vis",
            "children": [
                {
                    "name": "axis",
                    "children": [
                        {"name": "Axes", "size": 1302},
                        {"name": "Axis", "size": 24593},
                        {"name": "AxisGridLine", "size": 652},
                        {"name": "AxisLabel", "size": 636},
                        {"name": "CartesianAxes", "size": 6703}
                    ]
                },
                {
                    "name": "controls",
                    "children": [
                        {"name": "AnchorControl", "size": 2138},
                        {"name": "ClickControl", "size": 3824},
                        {"name": "Control", "size": 1353},
                        {"name": "ControlList", "size": 4665},
                        {"name": "DragControl", "size": 2649},
                        {"name": "ExpandControl", "size": 2832},
                        {"name": "HoverControl", "size": 4896},
                        {"name": "IControl", "size": 763},
                        {"name": "PanZoomControl", "size": 5222},
                        {"name": "SelectionControl", "size": 7862},
                        {"name": "TooltipControl", "size": 8435}
                    ]
                },
                {
                    "name": "data",
                    "children": [
                        {"name": "Data", "size": 20544},
                        {"name": "DataList", "size": 19788},
                        {"name": "DataSprite", "size": 10349},
                        {"name": "EdgeSprite", "size": 3301},
                        {"name": "NodeSprite", "size": 19382},
                        {
                            "name": "render",
                            "children": [
                                {"name": "ArrowType", "size": 698},
                                {"name": "EdgeRenderer", "size": 5569},
                                {"name": "IRenderer", "size": 353},
                                {"name": "ShapeRenderer", "size": 2247}
                            ]
                        },
                        {"name": "ScaleBinding", "size": 11275},
                        {"name": "Tree", "size": 7147},
                        {"name": "TreeBuilder", "size": 9930}
                    ]
                },
                {
                    "name": "events",
                    "children": [
                        {"name": "DataEvent", "size": 2313},
                        {"name": "SelectionEvent", "size": 1880},
                        {"name": "TooltipEvent", "size": 1701},
                        {"name": "VisualizationEvent", "size": 1117}
                    ]
                },
                {
                    "name": "legend",
                    "children": [
                        {"name": "Legend", "size": 20859},
                        {"name": "LegendItem", "size": 4614},
                        {"name": "LegendRange", "size": 10530}
                    ]
                },
                {
                    "name": "operator",
                    "children": [
                        {
                            "name": "distortion",
                            "children": [
                                {"name": "BifocalDistortion", "size": 4461},
                                {"name": "Distortion", "size": 6314},
                                {"name": "FisheyeDistortion", "size": 3444}
                            ]
                        },
                        {
                            "name": "encoder",
                            "children": [
                                {"name": "ColorEncoder", "size": 3179},
                                {"name": "Encoder", "size": 4060},
                                {"name": "PropertyEncoder", "size": 4138},
                                {"name": "ShapeEncoder", "size": 1690},
                                {"name": "SizeEncoder", "size": 1830}
                            ]
                        },
                        {
                            "name": "filter",
                            "children": [
                                {"name": "FisheyeTreeFilter", "size": 5219},
                                {"name": "GraphDistanceFilter", "size": 3165},
                                {"name": "VisibilityFilter", "size": 3509}
                            ]
                        },
                        {"name": "IOperator", "size": 1286},
                        {
                            "name": "label",
                            "children": [
                                {"name": "Labeler", "size": 9956},
                                {"name": "RadialLabeler", "size": 3899},
                                {"name": "StackedAreaLabeler", "size": 3202}
                            ]
                        },
                        {
                            "name": "layout",
                            "children": [
                                {"name": "AxisLayout", "size": 6725},
                                {"name": "BundledEdgeRouter", "size": 3727},
                                {"name": "CircleLayout", "size": 9317},
                                {"name": "CirclePackingLayout", "size": 12003},
                                {"name": "DendrogramLayout", "size": 4853},
                                {"name": "ForceDirectedLayout", "size": 8411},
                                {"name": "IcicleTreeLayout", "size": 4864},
                                {"name": "IndentedTreeLayout", "size": 3174},
                                {"name": "Layout", "size": 7881},
                                {"name": "NodeLinkTreeLayout", "size": 12870},
                                {"name": "PieLayout", "size": 2728},
                                {"name": "RadialTreeLayout", "size": 12348},
                                {"name": "RandomLayout", "size": 870},
                                {"name": "StackedAreaLayout", "size": 9121},
                                {"name": "TreeMapLayout", "size": 9191}
                            ]
                        },
                        {"name": "Operator", "size": 2490},
                        {"name": "OperatorList", "size": 5248},
                        {"name": "OperatorSequence", "size": 4190},
                        {"name": "OperatorSwitch", "size": 2581},
                        {"name": "SortOperator", "size": 2023}
                    ]
                },
                {"name": "Visualization", "size": 16540}
            ]
        }
    ]
};*/

var flare = {
    "name": "Burris",
    "children": [
        {
            "name": "Clare",
            "children": [
                {
                    "name": "Walton",
                    "children": [
                        {
                            "name": "Cardenas"
                        },
                        {
                            "name": "Linda"
                        },
                        {
                            "name": "Erica"
                        }
                    ]
                },
                {
                    "name": "Park",
                    "children": [
                        {
                            "name": "Allen"
                        },
                        {
                            "name": "Roman"
                        },
                        {
                            "name": "Florine"
                        },
                        {
                            "name": "Christina"
                        },
                        {
                            "name": "Harper"
                        },
                        {
                            "name": "Barry"
                        },
                        {
                            "name": "Rivers"
                        },
                        {
                            "name": "Glenda"
                        }
                    ]
                },
                {
                    "name": "Miller",
                    "children": [
                        {
                            "name": "Dawson"
                        },
                        {
                            "name": "Loretta"
                        },
                        {
                            "name": "Adkins"
                        },
                        {
                            "name": "Shepherd"
                        },
                        {
                            "name": "Avery"
                        },
                        {
                            "name": "Jaime"
                        }
                    ]
                },
                {
                    "name": "Vasquez",
                    "children": [
                        {
                            "name": "Workman"
                        },
                        {
                            "name": "Gaines"
                        },
                        {
                            "name": "Norman"
                        },
                        {
                            "name": "Boyer"
                        },
                        {
                            "name": "Brock"
                        },
                        {
                            "name": "Alexis"
                        },
                        {
                            "name": "Erika"
                        }
                    ]
                },
                {
                    "name": "Eunice",
                    "children": [
                        {
                            "name": "Deleon"
                        },
                        {
                            "name": "Lang"
                        },
                        {
                            "name": "Ebony"
                        },
                        {
                            "name": "Kemp"
                        },
                        {
                            "name": "Rollins"
                        },
                        {
                            "name": "Estes"
                        },
                        {
                            "name": "Benson"
                        },
                        {
                            "name": "Margret"
                        },
                        {
                            "name": "Allyson"
                        },
                        {
                            "name": "Lola"
                        }
                    ]
                },
                {
                    "name": "Lottie",
                    "children": [
                        {
                            "name": "Talley"
                        },
                        {
                            "name": "Laurel"
                        },
                        {
                            "name": "Ward"
                        }
                    ]
                },
                {
                    "name": "Bobbie",
                    "children": [
                        {
                            "name": "Delores"
                        },
                        {
                            "name": "Knapp"
                        },
                        {
                            "name": "Dianne"
                        },
                        {
                            "name": "Wooten"
                        },
                        {
                            "name": "Lily"
                        },
                        {
                            "name": "Duffy"
                        },
                        {
                            "name": "Mullen"
                        },
                        {
                            "name": "Patrica"
                        },
                        {
                            "name": "Sutton"
                        }
                    ]
                },
                {
                    "name": "Jeanette",
                    "children": [
                        {
                            "name": "Logan"
                        },
                        {
                            "name": "Ayala"
                        },
                        {
                            "name": "Nola"
                        },
                        {
                            "name": "Kim"
                        },
                        {
                            "name": "Vance"
                        },
                        {
                            "name": "Leigh"
                        },
                        {
                            "name": "Daniels"
                        }
                    ]
                },
                {
                    "name": "Madge",
                    "children": [
                        {
                            "name": "Goff"
                        },
                        {
                            "name": "Davis"
                        },
                        {
                            "name": "Ramirez"
                        },
                        {
                            "name": "Nita"
                        },
                        {
                            "name": "Barr"
                        },
                        {
                            "name": "Earline"
                        }
                    ]
                },
                {
                    "name": "Freida",
                    "children": [
                        {
                            "name": "Stevens"
                        },
                        {
                            "name": "Whitaker"
                        },
                        {
                            "name": "Erma"
                        },
                        {
                            "name": "Gallagher"
                        },
                        {
                            "name": "Clay"
                        },
                        {
                            "name": "Martina"
                        },
                        {
                            "name": "Lou"
                        },
                        {
                            "name": "Sheryl"
                        },
                        {
                            "name": "Kidd"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Doris",
            "children": [
                {
                    "name": "Darla",
                    "children": [
                        {
                            "name": "Mcfadden"
                        },
                        {
                            "name": "Carmella"
                        },
                        {
                            "name": "Cooper"
                        },
                        {
                            "name": "Jeanine"
                        },
                        {
                            "name": "Simmons"
                        },
                        {
                            "name": "Gray"
                        },
                        {
                            "name": "Rebecca"
                        },
                        {
                            "name": "Hernandez"
                        },
                        {
                            "name": "Macias"
                        },
                        {
                            "name": "Georgia"
                        }
                    ]
                },
                {
                    "name": "Enid",
                    "children": [
                        {
                            "name": "Cline"
                        },
                        {
                            "name": "Butler"
                        },
                        {
                            "name": "Richard"
                        },
                        {
                            "name": "Rose"
                        },
                        {
                            "name": "Martin"
                        },
                        {
                            "name": "Evangelina"
                        },
                        {
                            "name": "Cook"
                        }
                    ]
                },
                {
                    "name": "Shelton",
                    "children": [
                        {
                            "name": "Conner"
                        },
                        {
                            "name": "Agnes"
                        },
                        {
                            "name": "Rachel"
                        },
                        {
                            "name": "Iris"
                        },
                        {
                            "name": "Johnnie"
                        }
                    ]
                },
                {
                    "name": "Joyce",
                    "children": [
                        {
                            "name": "Casey"
                        },
                        {
                            "name": "Sophia"
                        },
                        {
                            "name": "Rosa"
                        }
                    ]
                },
                {
                    "name": "Huber",
                    "children": [
                        {
                            "name": "Hallie"
                        },
                        {
                            "name": "Annabelle"
                        },
                        {
                            "name": "Mabel"
                        },
                        {
                            "name": "Grant"
                        },
                        {
                            "name": "Dale"
                        }
                    ]
                },
                {
                    "name": "Lea",
                    "children": [
                        {
                            "name": "Lucy"
                        },
                        {
                            "name": "Paige"
                        },
                        {
                            "name": "Haley"
                        },
                        {
                            "name": "Leona"
                        },
                        {
                            "name": "Elaine"
                        },
                        {
                            "name": "Alyssa"
                        },
                        {
                            "name": "Alberta"
                        },
                        {
                            "name": "Townsend"
                        },
                        {
                            "name": "Lorraine"
                        },
                        {
                            "name": "Medina"
                        }
                    ]
                },
                {
                    "name": "Carolina",
                    "children": [
                        {
                            "name": "Delgado"
                        },
                        {
                            "name": "Brenda"
                        },
                        {
                            "name": "Viola"
                        },
                        {
                            "name": "Freda"
                        },
                        {
                            "name": "Nelda"
                        },
                        {
                            "name": "Rhea"
                        },
                        {
                            "name": "Herminia"
                        }
                    ]
                },
                {
                    "name": "Peck",
                    "children": [
                        {
                            "name": "Greta"
                        },
                        {
                            "name": "Dickerson"
                        },
                        {
                            "name": "Munoz"
                        },
                        {
                            "name": "Duran"
                        },
                        {
                            "name": "Vickie"
                        },
                        {
                            "name": "Gertrude"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Mccall",
            "children": [
                {
                    "name": "Skinner",
                    "children": [
                        {
                            "name": "Conrad"
                        },
                        {
                            "name": "Snider"
                        },
                        {
                            "name": "Sykes"
                        },
                        {
                            "name": "Blackwell"
                        },
                        {
                            "name": "Luisa"
                        },
                        {
                            "name": "Hoffman"
                        },
                        {
                            "name": "Patricia"
                        },
                        {
                            "name": "Rachael"
                        }
                    ]
                },
                {
                    "name": "Jacklyn",
                    "children": [
                        {
                            "name": "Kelley"
                        },
                        {
                            "name": "Rosalinda"
                        },
                        {
                            "name": "Evelyn"
                        },
                        {
                            "name": "Moran"
                        },
                        {
                            "name": "Josie"
                        },
                        {
                            "name": "Jennifer"
                        },
                        {
                            "name": "Jeri"
                        },
                        {
                            "name": "Theresa"
                        }
                    ]
                },
                {
                    "name": "Hardin",
                    "children": [
                        {
                            "name": "Bridgette"
                        },
                        {
                            "name": "Anna"
                        },
                        {
                            "name": "Macdonald"
                        },
                        {
                            "name": "Marina"
                        }
                    ]
                },
                {
                    "name": "Ladonna",
                    "children": [
                        {
                            "name": "Ellis"
                        },
                        {
                            "name": "Kasey"
                        },
                        {
                            "name": "Mills"
                        },
                        {
                            "name": "Spence"
                        },
                        {
                            "name": "Bolton"
                        },
                        {
                            "name": "Mclean"
                        },
                        {
                            "name": "Emilia"
                        },
                        {
                            "name": "Horne"
                        }
                    ]
                },
                {
                    "name": "Mari",
                    "children": [
                        {
                            "name": "Frye"
                        },
                        {
                            "name": "Alana"
                        },
                        {
                            "name": "Franco"
                        },
                        {
                            "name": "Michelle"
                        },
                        {
                            "name": "Jarvis"
                        }
                    ]
                },
                {
                    "name": "Becky",
                    "children": [
                        {
                            "name": "Rodgers"
                        },
                        {
                            "name": "Adela"
                        },
                        {
                            "name": "Michael"
                        }
                    ]
                },
                {
                    "name": "Drake",
                    "children": [
                        {
                            "name": "Elsie"
                        },
                        {
                            "name": "Ilene"
                        },
                        {
                            "name": "Jessica"
                        },
                        {
                            "name": "Combs"
                        }
                    ]
                },
                {
                    "name": "Benton",
                    "children": [
                        {
                            "name": "Cora"
                        },
                        {
                            "name": "Lowery"
                        },
                        {
                            "name": "Booker"
                        },
                        {
                            "name": "Hurley"
                        },
                        {
                            "name": "Farrell"
                        },
                        {
                            "name": "Maxine"
                        },
                        {
                            "name": "Nichole"
                        },
                        {
                            "name": "Vega"
                        },
                        {
                            "name": "Karina"
                        },
                        {
                            "name": "Renee"
                        }
                    ]
                },
                {
                    "name": "Nicole",
                    "children": [
                        {
                            "name": "Aisha"
                        },
                        {
                            "name": "Callie"
                        },
                        {
                            "name": "Roberts"
                        },
                        {
                            "name": "Conway"
                        },
                        {
                            "name": "Elsa"
                        },
                        {
                            "name": "Harriett"
                        },
                        {
                            "name": "York"
                        }
                    ]
                },
                {
                    "name": "Shaffer",
                    "children": [
                        {
                            "name": "Jewell"
                        },
                        {
                            "name": "Harriet"
                        },
                        {
                            "name": "Norma"
                        },
                        {
                            "name": "Penelope"
                        },
                        {
                            "name": "Ayers"
                        },
                        {
                            "name": "Eliza"
                        },
                        {
                            "name": "Sharron"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Serrano",
            "children": [
                {
                    "name": "Duncan",
                    "children": [
                        {
                            "name": "Erna"
                        },
                        {
                            "name": "Goodman"
                        },
                        {
                            "name": "Horton"
                        }
                    ]
                },
                {
                    "name": "Mckinney",
                    "children": [
                        {
                            "name": "Shepard"
                        },
                        {
                            "name": "Ollie"
                        },
                        {
                            "name": "Howard"
                        },
                        {
                            "name": "Araceli"
                        }
                    ]
                },
                {
                    "name": "Maritza",
                    "children": [
                        {
                            "name": "Morgan"
                        },
                        {
                            "name": "Elinor"
                        },
                        {
                            "name": "Yates"
                        },
                        {
                            "name": "Eugenia"
                        },
                        {
                            "name": "Wyatt"
                        }
                    ]
                },
                {
                    "name": "Hope",
                    "children": [
                        {
                            "name": "Grimes"
                        },
                        {
                            "name": "Mccormick"
                        },
                        {
                            "name": "Rhoda"
                        },
                        {
                            "name": "Lucille"
                        },
                        {
                            "name": "Emily"
                        },
                        {
                            "name": "Burns"
                        },
                        {
                            "name": "Mcconnell"
                        },
                        {
                            "name": "Warren"
                        }
                    ]
                },
                {
                    "name": "Johanna",
                    "children": [
                        {
                            "name": "Dean"
                        },
                        {
                            "name": "Audra"
                        },
                        {
                            "name": "Flynn"
                        },
                        {
                            "name": "Brown"
                        },
                        {
                            "name": "Antoinette"
                        }
                    ]
                },
                {
                    "name": "Marva",
                    "children": [
                        {
                            "name": "Reeves"
                        },
                        {
                            "name": "Patterson"
                        },
                        {
                            "name": "Abigail"
                        },
                        {
                            "name": "Walter"
                        },
                        {
                            "name": "Tami"
                        },
                        {
                            "name": "Jannie"
                        },
                        {
                            "name": "Nunez"
                        },
                        {
                            "name": "Stewart"
                        }
                    ]
                },
                {
                    "name": "Kristina",
                    "children": [
                        {
                            "name": "Velasquez"
                        },
                        {
                            "name": "Polly"
                        },
                        {
                            "name": "Caitlin"
                        },
                        {
                            "name": "Danielle"
                        },
                        {
                            "name": "Ortega"
                        },
                        {
                            "name": "Dunlap"
                        },
                        {
                            "name": "Mcguire"
                        },
                        {
                            "name": "Melba"
                        },
                        {
                            "name": "Cross"
                        },
                        {
                            "name": "Sandy"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Elvia",
            "children": [
                {
                    "name": "Clarice",
                    "children": [
                        {
                            "name": "Briana"
                        },
                        {
                            "name": "Oneill"
                        },
                        {
                            "name": "Alisa"
                        },
                        {
                            "name": "Yang"
                        },
                        {
                            "name": "Nannie"
                        },
                        {
                            "name": "Berry"
                        },
                        {
                            "name": "Gina"
                        },
                        {
                            "name": "Bradford"
                        }
                    ]
                },
                {
                    "name": "Conley",
                    "children": [
                        {
                            "name": "Claudia"
                        },
                        {
                            "name": "Vilma"
                        },
                        {
                            "name": "Sherri"
                        },
                        {
                            "name": "Hogan"
                        },
                        {
                            "name": "Angelica"
                        }
                    ]
                },
                {
                    "name": "Ronda",
                    "children": [
                        {
                            "name": "Riddle"
                        },
                        {
                            "name": "Gonzalez"
                        },
                        {
                            "name": "Lora"
                        },
                        {
                            "name": "Blake"
                        },
                        {
                            "name": "Marissa"
                        }
                    ]
                },
                {
                    "name": "Banks",
                    "children": [
                        {
                            "name": "Alison"
                        },
                        {
                            "name": "Baird"
                        },
                        {
                            "name": "Leola"
                        },
                        {
                            "name": "Downs"
                        },
                        {
                            "name": "Violet"
                        },
                        {
                            "name": "Hood"
                        },
                        {
                            "name": "Small"
                        },
                        {
                            "name": "Vargas"
                        },
                        {
                            "name": "Sharp"
                        }
                    ]
                },
                {
                    "name": "Kinney",
                    "children": [
                        {
                            "name": "Peters"
                        },
                        {
                            "name": "Pearson"
                        },
                        {
                            "name": "Wilkinson"
                        },
                        {
                            "name": "Barlow"
                        },
                        {
                            "name": "Genevieve"
                        }
                    ]
                },
                {
                    "name": "Yolanda",
                    "children": [
                        {
                            "name": "Marcie"
                        },
                        {
                            "name": "Marylou"
                        },
                        {
                            "name": "Gregory"
                        },
                        {
                            "name": "Rutledge"
                        },
                        {
                            "name": "Petra"
                        },
                        {
                            "name": "Holman"
                        },
                        {
                            "name": "Dillard"
                        }
                    ]
                },
                {
                    "name": "Esther",
                    "children": [
                        {
                            "name": "Lucas"
                        },
                        {
                            "name": "Hester"
                        },
                        {
                            "name": "Katherine"
                        },
                        {
                            "name": "Wall"
                        }
                    ]
                },
                {
                    "name": "Pittman",
                    "children": [
                        {
                            "name": "Parrish"
                        },
                        {
                            "name": "Tammy"
                        },
                        {
                            "name": "Nell"
                        },
                        {
                            "name": "Orr"
                        },
                        {
                            "name": "Dena"
                        },
                        {
                            "name": "Brewer"
                        }
                    ]
                },
                {
                    "name": "Cain",
                    "children": [
                        {
                            "name": "Gail"
                        },
                        {
                            "name": "Susan"
                        },
                        {
                            "name": "Holder"
                        },
                        {
                            "name": "Joyner"
                        }
                    ]
                },
                {
                    "name": "Noemi",
                    "children": [
                        {
                            "name": "Arnold"
                        },
                        {
                            "name": "Tucker"
                        },
                        {
                            "name": "Noel"
                        },
                        {
                            "name": "Cameron"
                        },
                        {
                            "name": "Geraldine"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Lori",
            "children": [
                {
                    "name": "Amanda",
                    "children": [
                        {
                            "name": "Misty"
                        },
                        {
                            "name": "Valenzuela"
                        },
                        {
                            "name": "Jayne"
                        },
                        {
                            "name": "Ellison"
                        },
                        {
                            "name": "Shawna"
                        },
                        {
                            "name": "Mccarty"
                        },
                        {
                            "name": "Juliette"
                        },
                        {
                            "name": "Velez"
                        },
                        {
                            "name": "Lott"
                        },
                        {
                            "name": "Jocelyn"
                        }
                    ]
                },
                {
                    "name": "Francesca",
                    "children": [
                        {
                            "name": "Hines"
                        },
                        {
                            "name": "Bonnie"
                        },
                        {
                            "name": "Perkins"
                        },
                        {
                            "name": "Saunders"
                        },
                        {
                            "name": "Mcclure"
                        },
                        {
                            "name": "Odom"
                        },
                        {
                            "name": "Thomas"
                        },
                        {
                            "name": "Rodriguez"
                        }
                    ]
                },
                {
                    "name": "Eleanor",
                    "children": [
                        {
                            "name": "Mayo"
                        },
                        {
                            "name": "Beryl"
                        },
                        {
                            "name": "Kimberley"
                        },
                        {
                            "name": "Valencia"
                        },
                        {
                            "name": "Olson"
                        },
                        {
                            "name": "Dale"
                        },
                        {
                            "name": "Rosemary"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Parsons",
            "children": [
                {
                    "name": "Acosta",
                    "children": [
                        {
                            "name": "Moore"
                        },
                        {
                            "name": "Hannah"
                        },
                        {
                            "name": "Finch"
                        },
                        {
                            "name": "Herring"
                        },
                        {
                            "name": "Betsy"
                        },
                        {
                            "name": "Mathews"
                        },
                        {
                            "name": "Kelly"
                        },
                        {
                            "name": "Maryanne"
                        },
                        {
                            "name": "Thompson"
                        }
                    ]
                },
                {
                    "name": "Dixie",
                    "children": [
                        {
                            "name": "Betty"
                        },
                        {
                            "name": "Dollie"
                        },
                        {
                            "name": "Mitchell"
                        },
                        {
                            "name": "Carey"
                        },
                        {
                            "name": "Mullins"
                        },
                        {
                            "name": "Madden"
                        }
                    ]
                },
                {
                    "name": "Phoebe",
                    "children": [
                        {
                            "name": "Carrillo"
                        },
                        {
                            "name": "Silvia"
                        },
                        {
                            "name": "Chelsea"
                        },
                        {
                            "name": "Leah"
                        },
                        {
                            "name": "Woodard"
                        },
                        {
                            "name": "Riggs"
                        },
                        {
                            "name": "Kelly"
                        },
                        {
                            "name": "Wynn"
                        }
                    ]
                },
                {
                    "name": "Rita",
                    "children": [
                        {
                            "name": "Carey"
                        },
                        {
                            "name": "Lambert"
                        },
                        {
                            "name": "Bentley"
                        },
                        {
                            "name": "Knox"
                        },
                        {
                            "name": "Harrell"
                        },
                        {
                            "name": "Frazier"
                        },
                        {
                            "name": "Muriel"
                        },
                        {
                            "name": "Clemons"
                        },
                        {
                            "name": "Short"
                        },
                        {
                            "name": "Stevenson"
                        }
                    ]
                },
                {
                    "name": "Salas",
                    "children": [
                        {
                            "name": "Stefanie"
                        },
                        {
                            "name": "Frieda"
                        },
                        {
                            "name": "Rice"
                        },
                        {
                            "name": "Mays"
                        },
                        {
                            "name": "Lillian"
                        },
                        {
                            "name": "Leach"
                        }
                    ]
                },
                {
                    "name": "Keller",
                    "children": [
                        {
                            "name": "Dolores"
                        },
                        {
                            "name": "Mathis"
                        },
                        {
                            "name": "Rogers"
                        },
                        {
                            "name": "Kristine"
                        }
                    ]
                },
                {
                    "name": "Rene",
                    "children": [
                        {
                            "name": "Christian"
                        },
                        {
                            "name": "Noelle"
                        },
                        {
                            "name": "Price"
                        },
                        {
                            "name": "Ewing"
                        },
                        {
                            "name": "Mcfarland"
                        },
                        {
                            "name": "Sheila"
                        },
                        {
                            "name": "Letha"
                        },
                        {
                            "name": "Brooke"
                        },
                        {
                            "name": "Wilson"
                        }
                    ]
                },
                {
                    "name": "Abbott",
                    "children": [
                        {
                            "name": "Joyce"
                        },
                        {
                            "name": "Pena"
                        },
                        {
                            "name": "Frank"
                        },
                        {
                            "name": "Noreen"
                        },
                        {
                            "name": "Chandler"
                        },
                        {
                            "name": "Joanne"
                        },
                        {
                            "name": "Jerri"
                        }
                    ]
                },
                {
                    "name": "Jodi",
                    "children": [
                        {
                            "name": "Tessa"
                        },
                        {
                            "name": "Janelle"
                        },
                        {
                            "name": "Henderson"
                        },
                        {
                            "name": "Reva"
                        },
                        {
                            "name": "Sylvia"
                        },
                        {
                            "name": "Jacobs"
                        },
                        {
                            "name": "Maynard"
                        },
                        {
                            "name": "Cox"
                        },
                        {
                            "name": "Goodwin"
                        },
                        {
                            "name": "Collins"
                        }
                    ]
                },
                {
                    "name": "Rosario",
                    "children": [
                        {
                            "name": "Gross"
                        },
                        {
                            "name": "Rich"
                        },
                        {
                            "name": "Darlene"
                        },
                        {
                            "name": "Berger"
                        },
                        {
                            "name": "Beth"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Maryann",
            "children": [
                {
                    "name": "Love",
                    "children": [
                        {
                            "name": "Katrina"
                        },
                        {
                            "name": "Hickman"
                        },
                        {
                            "name": "Cheri"
                        },
                        {
                            "name": "Gordon"
                        },
                        {
                            "name": "Toni"
                        }
                    ]
                },
                {
                    "name": "Beatrice",
                    "children": [
                        {
                            "name": "Socorro"
                        },
                        {
                            "name": "Felicia"
                        },
                        {
                            "name": "Cassie"
                        },
                        {
                            "name": "Anita"
                        },
                        {
                            "name": "Lynette"
                        },
                        {
                            "name": "Sanchez"
                        },
                        {
                            "name": "Alyson"
                        },
                        {
                            "name": "Foley"
                        },
                        {
                            "name": "Daphne"
                        }
                    ]
                },
                {
                    "name": "Lindsay",
                    "children": [
                        {
                            "name": "Little"
                        },
                        {
                            "name": "Rosales"
                        },
                        {
                            "name": "Ila"
                        },
                        {
                            "name": "Mercado"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Aline",
            "children": [
                {
                    "name": "Leslie",
                    "children": [
                        {
                            "name": "Sally"
                        },
                        {
                            "name": "Justice"
                        },
                        {
                            "name": "Eva"
                        },
                        {
                            "name": "Fay"
                        },
                        {
                            "name": "Garrett"
                        }
                    ]
                },
                {
                    "name": "Peggy",
                    "children": [
                        {
                            "name": "Tanisha"
                        },
                        {
                            "name": "Kayla"
                        },
                        {
                            "name": "Dickson"
                        },
                        {
                            "name": "Spears"
                        },
                        {
                            "name": "Daisy"
                        },
                        {
                            "name": "Tran"
                        },
                        {
                            "name": "Maggie"
                        }
                    ]
                },
                {
                    "name": "Kristin",
                    "children": [
                        {
                            "name": "Bette"
                        },
                        {
                            "name": "Eve"
                        },
                        {
                            "name": "Regina"
                        },
                        {
                            "name": "Buckner"
                        },
                        {
                            "name": "Barbra"
                        },
                        {
                            "name": "Rae"
                        },
                        {
                            "name": "Levine"
                        },
                        {
                            "name": "Burnett"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Perry",
            "children": [
                {
                    "name": "Dudley",
                    "children": [
                        {
                            "name": "Cassandra"
                        },
                        {
                            "name": "Langley"
                        },
                        {
                            "name": "Keith"
                        },
                        {
                            "name": "Jenna"
                        },
                        {
                            "name": "Turner"
                        },
                        {
                            "name": "Pam"
                        }
                    ]
                },
                {
                    "name": "Christensen",
                    "children": [
                        {
                            "name": "Sargent"
                        },
                        {
                            "name": "Tamera"
                        },
                        {
                            "name": "Ballard"
                        },
                        {
                            "name": "Vicki"
                        }
                    ]
                },
                {
                    "name": "Millie",
                    "children": [
                        {
                            "name": "Morin"
                        },
                        {
                            "name": "Santos"
                        },
                        {
                            "name": "Neva"
                        },
                        {
                            "name": "Maude"
                        },
                        {
                            "name": "Lillie"
                        },
                        {
                            "name": "Jones"
                        },
                        {
                            "name": "Hammond"
                        }
                    ]
                },
                {
                    "name": "Prince",
                    "children": [
                        {
                            "name": "Carmela"
                        },
                        {
                            "name": "Hewitt"
                        },
                        {
                            "name": "Terry"
                        },
                        {
                            "name": "Alfreda"
                        },
                        {
                            "name": "Faulkner"
                        },
                        {
                            "name": "Lacey"
                        },
                        {
                            "name": "Melendez"
                        }
                    ]
                },
                {
                    "name": "Pansy",
                    "children": [
                        {
                            "name": "Wilder"
                        },
                        {
                            "name": "Martinez"
                        },
                        {
                            "name": "Iva"
                        },
                        {
                            "name": "Jackie"
                        },
                        {
                            "name": "Oliver"
                        }
                    ]
                }
            ]
        }
    ]
};

window.onload = function (){
    console.log("d3t2", d3, flare);
    var width = 960, height = 4200;
    var cluster = d3.layout.cluster().size([height, width - 160]);
    var svg = d3.select("body").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(120,0)");
    {
        root = flare;

        var nodes = cluster.nodes(root),
            links = cluster.links(nodes);

        var link = svg.selectAll(".link")
            .data(links)
            .enter().append("path")
            .attr("class", "link")
            .attr("d", function(d) {
                return "M" + d.source.y + "," + d.source.x
                    + "C" + d.source.y + "," + d.source.x
                    + " " + d.source.y + "," + d.target.x
                    + " " + d.target.y + "," + d.target.x;
            });

        var node = svg.selectAll(".node")
            .data(nodes)
            .enter().append("g")
            .attr("class", "node jGreen")
            .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

        node.append("circle")
            .attr("r", 4.5);

        node.append("text")
            .attr("dx", function(d) { return d.children ? -8 : 8; })
            .attr("dy", 3)
            .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
            .text(function(d) { return d.name; });
    }
    d3.select(self.frameElement).style("height", height + "px");

};

