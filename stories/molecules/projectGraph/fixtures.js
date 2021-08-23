export const daggy = {
  nodes: [
    {
      type: 'File',
      path: 'article.json',
      index: 0,
    },
    {
      type: 'Node',
      path: 'article.json',
      id: '_Ma93QrTXJkrkyQLMLm0g',
      kind: 'CodeChunk',
      index: 1,
    },
    {
      type: 'Symbol',
      path: 'article.json',
      name: 'data',
      kind: 'Datatable',
      index: 2,
    },
    {
      type: 'File',
      path: 'data1.csv',
      index: 3,
    },
    {
      type: 'Node',
      path: 'article.json',
      id: '_JyShu2aJblinpnONYdp8',
      kind: 'CodeChunk',
      index: 4,
    },
    {
      type: 'Symbol',
      path: 'article.json',
      name: 'par1',
      kind: '',
      index: 5,
    },
    {
      type: 'Node',
      path: 'article.json',
      id: '_KxVqqc0y2TFg2IYZqqJV',
      kind: 'CodeChunk',
      index: 6,
    },
    {
      type: 'Symbol',
      path: 'article.json',
      name: 'par2',
      kind: '',
      index: 7,
    },
    {
      type: 'Node',
      path: 'article.json',
      id: '_tit8ijcRrbJBVzrJJPD7',
      kind: 'Include',
      index: 8,
    },
    {
      type: 'File',
      path: 'section1.md',
      index: 9,
    },
    {
      type: 'Node',
      path: 'section1.md',
      id: '_Ll7WFjdS0k85h9RBOP8s',
      kind: 'ImageObjectSimple',
      index: 10,
    },
    {
      type: 'File',
      path: 'image1.jpg',
      index: 11,
    },
    {
      type: 'Node',
      path: 'image1.jpg',
      id: '_2z8BtI1UJxdimn6Qp17y',
      kind: 'ImageObject',
      index: 12,
    },
    {
      type: 'Node',
      path: 'section1.md',
      id: '_xqeYAVtchKFmrnV60eR0',
      kind: 'Link',
      index: 13,
    },
    {
      type: 'File',
      path: 'script1.js',
      index: 14,
    },
    {
      type: 'Module',
      language: 'javascript',
      name: 'path',
      index: 15,
    },
    {
      type: 'File',
      path: 'module1.js',
      index: 16,
    },
    {
      type: 'Symbol',
      path: 'module1.js',
      name: 'var1',
      kind: 'Boolean',
      index: 17,
    },
    {
      type: 'Node',
      path: 'section1.md',
      id: '_i5713yJZPFf0daDc5L5h',
      kind: 'Link',
      index: 18,
    },
    {
      type: 'File',
      path: 'script2.py',
      index: 19,
    },
    {
      type: 'Module',
      language: 'python',
      name: 'sys',
      index: 20,
    },
    {
      type: 'File',
      path: 'module2.py',
      index: 21,
    },
    {
      type: 'Symbol',
      path: 'module2.py',
      name: 'var1',
      kind: 'Boolean',
      index: 22,
    },
    {
      type: 'Symbol',
      path: 'module2.py',
      name: 'func1',
      kind: 'Function',
      index: 23,
    },
    {
      type: 'Node',
      path: 'section1.md',
      id: '_UYHvBRwAHimFu5sSIxd8',
      kind: 'Link',
      index: 24,
    },
    {
      type: 'File',
      path: 'script3.R',
      index: 25,
    },
    {
      type: 'Symbol',
      path: 'script3.R',
      name: 'a',
      kind: 'Boolean',
      index: 26,
    },
    {
      type: 'Symbol',
      path: 'script3.R',
      name: 'b',
      kind: 'Number',
      index: 27,
    },
    {
      type: 'Symbol',
      path: 'script3.R',
      name: 'c',
      kind: 'String',
      index: 28,
    },
    {
      type: 'Node',
      path: 'section1.md',
      id: '_MBXVqDHnlMmbw0MSQ7Id',
      kind: 'ImageObjectSimple',
      index: 29,
    },
    {
      type: 'Url',
      url: 'https://source.unsplash.com/random',
      index: 30,
    },
    {
      type: 'Node',
      path: 'article.json',
      id: '_U4qPluwI98K4hJbvr7Hy',
      kind: 'Parameter',
      index: 31,
    },
    {
      type: 'Node',
      path: 'article.json',
      id: '_DdyQYj5YLVJrPGbyRaWf',
      kind: 'Parameter',
      index: 32,
    },
    {
      type: 'Source',
      name: 'elife-60912',
      index: 33,
    },
    {
      type: 'File',
      path: 'article.xml',
      index: 34,
    },
    {
      type: 'File',
      path: 'article.xml.media/fig1-v1.jpg',
      index: 35,
    },
  ],
  edges: [
    {
      from: 1,
      to: 2,
      relation: {
        type: 'Assign',
        range: [0, 0, 0, 4],
      },
    },
    {
      from: 3,
      to: 1,
      relation: {
        type: 'Read',
        range: [0, 17, 0, 28],
      },
    },
    {
      from: 2,
      to: 4,
      relation: {
        type: 'Use',
        range: [0, 5, 0, 9],
      },
    },
    {
      from: 5,
      to: 4,
      relation: {
        type: 'Use',
        range: [0, 11, 0, 15],
      },
    },
    {
      from: 2,
      to: 6,
      relation: {
        type: 'Use',
        range: [0, 8, 0, 12],
      },
    },
    {
      from: 5,
      to: 6,
      relation: {
        type: 'Use',
        range: [0, 14, 0, 18],
      },
    },
    {
      from: 7,
      to: 6,
      relation: {
        type: 'Use',
        range: [0, 20, 0, 24],
      },
    },
    {
      from: 9,
      to: 8,
      relation: {
        type: 'Include',
      },
    },
    {
      from: 11,
      to: 10,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 11,
      to: 12,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 13,
      to: 14,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 15,
      to: 14,
      relation: {
        type: 'Use',
        range: [0, 17, 0, 23],
      },
    },
    {
      from: 16,
      to: 14,
      relation: {
        type: 'Use',
        range: [1, 21, 1, 32],
      },
    },
    {
      from: 16,
      to: 17,
      relation: {
        type: 'Assign',
        range: [0, 13, 0, 17],
      },
    },
    {
      from: 18,
      to: 19,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 20,
      to: 19,
      relation: {
        type: 'Use',
        range: [0, 7, 0, 10],
      },
    },
    {
      from: 21,
      to: 19,
      relation: {
        type: 'Use',
        range: [1, 5, 1, 12],
      },
    },
    {
      from: 21,
      to: 22,
      relation: {
        type: 'Assign',
        range: [0, 0, 0, 4],
      },
    },
    {
      from: 21,
      to: 23,
      relation: {
        type: 'Assign',
        range: [2, 4, 2, 9],
      },
    },
    {
      from: 24,
      to: 25,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 25,
      to: 26,
      relation: {
        type: 'Assign',
        range: [0, 0, 0, 1],
      },
    },
    {
      from: 25,
      to: 27,
      relation: {
        type: 'Assign',
        range: [1, 0, 1, 1],
      },
    },
    {
      from: 25,
      to: 28,
      relation: {
        type: 'Assign',
        range: [2, 0, 2, 1],
      },
    },
    {
      from: 30,
      to: 29,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 31,
      to: 7,
      relation: {
        type: 'Assign',
        range: [0, 0, 0, 0],
      },
    },
    {
      from: 32,
      to: 5,
      relation: {
        type: 'Assign',
        range: [0, 0, 0, 0],
      },
    },
    {
      from: 33,
      to: 34,
      relation: {
        type: 'Import',
        auto: false,
      },
    },
    {
      from: 33,
      to: 35,
      relation: {
        type: 'Import',
        auto: false,
      },
    },
    {
      from: 34,
      to: 0,
      relation: {
        type: 'Convert',
        auto: false,
      },
    },
  ],
}

export const pastoll = {
  nodes: [
    {
      type: 'File',
      path: 'Functions.R',
      index: 0,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'knitr',
      kind: '',
      index: 1,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'opts_chunk',
      kind: '',
      index: 2,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_to_fit',
      kind: 'Function',
      index: 3,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_housing',
      kind: 'Function',
      index: 4,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_age',
      kind: 'Function',
      index: 5,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_age_con',
      kind: 'Function',
      index: 6,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_sex',
      kind: 'Function',
      index: 7,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_all_lmerTest',
      kind: 'Function',
      index: 8,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_all',
      kind: 'Function',
      index: 9,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_all_PC',
      kind: 'Function',
      index: 10,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_all_NM',
      kind: 'Function',
      index: 11,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_all_BFGS',
      kind: 'Function',
      index: 12,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_all_nlminb',
      kind: 'Function',
      index: 13,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_ml',
      kind: 'Function',
      index: 14,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_hemi',
      kind: 'Function',
      index: 15,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_exp',
      kind: 'Function',
      index: 16,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_dir',
      kind: 'Function',
      index: 17,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_rect',
      kind: 'Function',
      index: 18,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_counts',
      kind: 'Function',
      index: 19,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_full_fixed',
      kind: 'Function',
      index: 20,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'model_vsris_full_fixed_linear',
      kind: 'Function',
      index: 21,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'linearmodel_to_fit',
      kind: 'Function',
      index: 22,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'linearmodel_to_fit_1',
      kind: 'Function',
      index: 23,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'linearmodel_age',
      kind: 'Function',
      index: 24,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'linearmodel_housing',
      kind: 'Function',
      index: 25,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'nlmemodel_to_fit',
      kind: 'Function',
      index: 26,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'coef_df',
      kind: 'Function',
      index: 27,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'coef_df_2',
      kind: 'Function',
      index: 28,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'coef_df_2_old',
      kind: 'Function',
      index: 29,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'devcalc',
      kind: 'Function',
      index: 30,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'extractdf',
      kind: 'Function',
      index: 31,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'mixed_vs_linear_pchisqu',
      kind: 'Function',
      index: 32,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'hist_theme',
      kind: '',
      index: 33,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'theme',
      kind: 'Function',
      index: 34,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'element_text',
      kind: 'Function',
      index: 35,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'element_blank',
      kind: 'Function',
      index: 36,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'PCA_theme',
      kind: '',
      index: 37,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'normalize',
      kind: 'Function',
      index: 38,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'mixedmod_extract',
      kind: 'Function',
      index: 39,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'prep_int_slopes',
      kind: 'Function',
      index: 40,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'prep_int_slopes_PCA',
      kind: 'Function',
      index: 41,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'edf',
      kind: 'Function',
      index: 42,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'plotFE_sd',
      kind: 'Function',
      index: 43,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'summary_2fixedeffects',
      kind: 'Function',
      index: 44,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'FE2_p.adjust',
      kind: 'Function',
      index: 45,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'FE_table',
      kind: 'Function',
      index: 46,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'all_by_fac',
      kind: 'Function',
      index: 47,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'predict_plot',
      kind: 'Function',
      index: 48,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'predict_plot_2',
      kind: 'Function',
      index: 49,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'gg_ir_format',
      kind: 'Function',
      index: 50,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'gg_rheo_format',
      kind: 'Function',
      index: 51,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'gg_resf_format',
      kind: 'Function',
      index: 52,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'table_mixedvslinear',
      kind: 'Function',
      index: 53,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'table_mixedvslinear_2',
      kind: 'Function',
      index: 54,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'pca_biplot',
      kind: 'Function',
      index: 55,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'save_kable_jpg_html',
      kind: 'Function',
      index: 56,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'calcQ',
      kind: 'Function',
      index: 57,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'gen_unif_sims',
      kind: 'Function',
      index: 58,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'get_delta_gaps_thresh_vals',
      kind: 'Function',
      index: 59,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'get_mean_dispersions',
      kind: 'Function',
      index: 60,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'fit_thresholds',
      kind: 'Function',
      index: 61,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'fit_dispersions',
      kind: 'Function',
      index: 62,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'scale_vec',
      kind: 'Function',
      index: 63,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'get_dispersion',
      kind: 'Function',
      index: 64,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'get_thresh_from_params',
      kind: 'Function',
      index: 65,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'get_dispersions_from_params',
      kind: 'Function',
      index: 66,
    },
    {
      type: 'Symbol',
      path: 'Functions.R',
      name: 'get_k_est',
      kind: 'Function',
      index: 67,
    },
  ],
  edges: [
    {
      from: 1,
      to: 0,
      relation: {
        type: 'Use',
        range: [11, 0, 11, 5],
      },
    },
    {
      from: 2,
      to: 0,
      relation: {
        type: 'Use',
        range: [11, 7, 11, 17],
      },
    },
    {
      from: 0,
      to: 3,
      relation: {
        type: 'Assign',
        range: [23, 0, 23, 12],
      },
    },
    {
      from: 0,
      to: 4,
      relation: {
        type: 'Assign',
        range: [35, 0, 35, 19],
      },
    },
    {
      from: 0,
      to: 5,
      relation: {
        type: 'Assign',
        range: [40, 0, 40, 15],
      },
    },
    {
      from: 0,
      to: 6,
      relation: {
        type: 'Assign',
        range: [46, 0, 46, 19],
      },
    },
    {
      from: 0,
      to: 7,
      relation: {
        type: 'Assign',
        range: [52, 0, 52, 15],
      },
    },
    {
      from: 0,
      to: 8,
      relation: {
        type: 'Assign',
        range: [58, 0, 58, 24],
      },
    },
    {
      from: 0,
      to: 9,
      relation: {
        type: 'Assign',
        range: [62, 0, 62, 15],
      },
    },
    {
      from: 0,
      to: 10,
      relation: {
        type: 'Assign',
        range: [66, 0, 66, 18],
      },
    },
    {
      from: 0,
      to: 11,
      relation: {
        type: 'Assign',
        range: [70, 0, 70, 18],
      },
    },
    {
      from: 0,
      to: 12,
      relation: {
        type: 'Assign',
        range: [74, 0, 74, 20],
      },
    },
    {
      from: 0,
      to: 13,
      relation: {
        type: 'Assign',
        range: [78, 0, 78, 22],
      },
    },
    {
      from: 0,
      to: 4,
      relation: {
        type: 'Assign',
        range: [83, 0, 83, 19],
      },
    },
    {
      from: 0,
      to: 5,
      relation: {
        type: 'Assign',
        range: [87, 0, 87, 15],
      },
    },
    {
      from: 0,
      to: 14,
      relation: {
        type: 'Assign',
        range: [91, 0, 91, 14],
      },
    },
    {
      from: 0,
      to: 15,
      relation: {
        type: 'Assign',
        range: [95, 0, 95, 16],
      },
    },
    {
      from: 0,
      to: 16,
      relation: {
        type: 'Assign',
        range: [99, 0, 99, 15],
      },
    },
    {
      from: 0,
      to: 17,
      relation: {
        type: 'Assign',
        range: [103, 0, 103, 15],
      },
    },
    {
      from: 0,
      to: 18,
      relation: {
        type: 'Assign',
        range: [107, 0, 107, 16],
      },
    },
    {
      from: 0,
      to: 19,
      relation: {
        type: 'Assign',
        range: [111, 0, 111, 18],
      },
    },
    {
      from: 0,
      to: 20,
      relation: {
        type: 'Assign',
        range: [115, 0, 115, 22],
      },
    },
    {
      from: 0,
      to: 21,
      relation: {
        type: 'Assign',
        range: [119, 0, 119, 29],
      },
    },
    {
      from: 0,
      to: 22,
      relation: {
        type: 'Assign',
        range: [128, 0, 128, 18],
      },
    },
    {
      from: 0,
      to: 23,
      relation: {
        type: 'Assign',
        range: [132, 0, 132, 20],
      },
    },
    {
      from: 0,
      to: 24,
      relation: {
        type: 'Assign',
        range: [136, 0, 136, 15],
      },
    },
    {
      from: 0,
      to: 25,
      relation: {
        type: 'Assign',
        range: [140, 0, 140, 19],
      },
    },
    {
      from: 0,
      to: 26,
      relation: {
        type: 'Assign',
        range: [152, 0, 152, 16],
      },
    },
    {
      from: 0,
      to: 27,
      relation: {
        type: 'Assign',
        range: [162, 0, 162, 7],
      },
    },
    {
      from: 0,
      to: 28,
      relation: {
        type: 'Assign',
        range: [172, 0, 172, 9],
      },
    },
    {
      from: 0,
      to: 29,
      relation: {
        type: 'Assign',
        range: [177, 0, 177, 13],
      },
    },
    {
      from: 0,
      to: 30,
      relation: {
        type: 'Assign',
        range: [190, 0, 190, 7],
      },
    },
    {
      from: 0,
      to: 31,
      relation: {
        type: 'Assign',
        range: [194, 0, 194, 9],
      },
    },
    {
      from: 0,
      to: 32,
      relation: {
        type: 'Assign',
        range: [198, 0, 198, 23],
      },
    },
    {
      from: 0,
      to: 33,
      relation: {
        type: 'Assign',
        range: [218, 0, 218, 10],
      },
    },
    {
      from: 34,
      to: 0,
      relation: {
        type: 'Use',
        range: [218, 13, 218, 18],
      },
    },
    {
      from: 35,
      to: 0,
      relation: {
        type: 'Use',
        range: [219, 11, 219, 23],
      },
    },
    {
      from: 36,
      to: 0,
      relation: {
        type: 'Use',
        range: [220, 23, 220, 36],
      },
    },
    {
      from: 36,
      to: 0,
      relation: {
        type: 'Use',
        range: [221, 17, 221, 30],
      },
    },
    {
      from: 36,
      to: 0,
      relation: {
        type: 'Use',
        range: [222, 17, 222, 30],
      },
    },
    {
      from: 0,
      to: 37,
      relation: {
        type: 'Assign',
        range: [227, 0, 227, 9],
      },
    },
    {
      from: 34,
      to: 0,
      relation: {
        type: 'Use',
        range: [227, 12, 227, 17],
      },
    },
    {
      from: 35,
      to: 0,
      relation: {
        type: 'Use',
        range: [228, 11, 228, 23],
      },
    },
    {
      from: 36,
      to: 0,
      relation: {
        type: 'Use',
        range: [229, 23, 229, 36],
      },
    },
    {
      from: 36,
      to: 0,
      relation: {
        type: 'Use',
        range: [230, 17, 230, 30],
      },
    },
    {
      from: 0,
      to: 38,
      relation: {
        type: 'Assign',
        range: [236, 0, 236, 9],
      },
    },
    {
      from: 0,
      to: 39,
      relation: {
        type: 'Assign',
        range: [252, 0, 252, 16],
      },
    },
    {
      from: 0,
      to: 40,
      relation: {
        type: 'Assign',
        range: [297, 0, 297, 15],
      },
    },
    {
      from: 0,
      to: 41,
      relation: {
        type: 'Assign',
        range: [337, 0, 337, 19],
      },
    },
    {
      from: 0,
      to: 42,
      relation: {
        type: 'Assign',
        range: [361, 0, 361, 3],
      },
    },
    {
      from: 0,
      to: 43,
      relation: {
        type: 'Assign',
        range: [370, 0, 370, 9],
      },
    },
    {
      from: 0,
      to: 44,
      relation: {
        type: 'Assign',
        range: [393, 0, 393, 21],
      },
    },
    {
      from: 0,
      to: 45,
      relation: {
        type: 'Assign',
        range: [431, 0, 431, 12],
      },
    },
    {
      from: 0,
      to: 46,
      relation: {
        type: 'Assign',
        range: [444, 0, 444, 8],
      },
    },
    {
      from: 0,
      to: 47,
      relation: {
        type: 'Assign',
        range: [500, 0, 500, 10],
      },
    },
    {
      from: 0,
      to: 48,
      relation: {
        type: 'Assign',
        range: [513, 0, 513, 12],
      },
    },
    {
      from: 0,
      to: 49,
      relation: {
        type: 'Assign',
        range: [525, 0, 525, 14],
      },
    },
    {
      from: 0,
      to: 50,
      relation: {
        type: 'Assign',
        range: [537, 0, 537, 12],
      },
    },
    {
      from: 0,
      to: 51,
      relation: {
        type: 'Assign',
        range: [549, 0, 549, 14],
      },
    },
    {
      from: 0,
      to: 52,
      relation: {
        type: 'Assign',
        range: [562, 0, 562, 14],
      },
    },
    {
      from: 0,
      to: 53,
      relation: {
        type: 'Assign',
        range: [577, 0, 577, 19],
      },
    },
    {
      from: 0,
      to: 54,
      relation: {
        type: 'Assign',
        range: [604, 0, 604, 21],
      },
    },
    {
      from: 0,
      to: 55,
      relation: {
        type: 'Assign',
        range: [634, 0, 634, 10],
      },
    },
    {
      from: 0,
      to: 56,
      relation: {
        type: 'Assign',
        range: [654, 0, 654, 19],
      },
    },
    {
      from: 0,
      to: 57,
      relation: {
        type: 'Assign',
        range: [669, 0, 669, 5],
      },
    },
    {
      from: 0,
      to: 58,
      relation: {
        type: 'Assign',
        range: [707, 0, 707, 13],
      },
    },
    {
      from: 0,
      to: 59,
      relation: {
        type: 'Assign',
        range: [754, 0, 754, 26],
      },
    },
    {
      from: 0,
      to: 60,
      relation: {
        type: 'Assign',
        range: [781, 0, 781, 20],
      },
    },
    {
      from: 0,
      to: 61,
      relation: {
        type: 'Assign',
        range: [793, 0, 793, 14],
      },
    },
    {
      from: 0,
      to: 62,
      relation: {
        type: 'Assign',
        range: [823, 0, 823, 15],
      },
    },
    {
      from: 0,
      to: 63,
      relation: {
        type: 'Assign',
        range: [852, 0, 852, 9],
      },
    },
    {
      from: 0,
      to: 64,
      relation: {
        type: 'Assign',
        range: [865, 0, 865, 14],
      },
    },
    {
      from: 0,
      to: 65,
      relation: {
        type: 'Assign',
        range: [889, 0, 889, 22],
      },
    },
    {
      from: 0,
      to: 66,
      relation: {
        type: 'Assign',
        range: [898, 0, 898, 27],
      },
    },
    {
      from: 0,
      to: 67,
      relation: {
        type: 'Assign',
        range: [910, 0, 910, 9],
      },
    },
  ],
}

export const themed = {
  nodes: [
    {
      type: 'File',
      path: 'elife-67409.json',
      index: 0,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_khzfCo4D24BLuUgHcoUe',
      kind: 'Link',
      index: 1,
    },
    {
      type: 'File',
      path: '#fig3',
      index: 2,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_hF0LMAjNjmq6CpWaNp89',
      kind: 'Link',
      index: 3,
    },
    {
      type: 'File',
      path: '#fig1',
      index: 4,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_BSa3XHeAl049nRlWCLlq',
      kind: 'Link',
      index: 5,
    },
    {
      type: 'File',
      path: '#fig6',
      index: 6,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_D6e5F6gVPneq1i5grBgD',
      kind: 'ImageObject',
      index: 7,
    },
    {
      type: 'File',
      path: 'elife-67409.json.media/fig5-figsupp2.jpg',
      index: 8,
    },
    {
      type: 'Node',
      path: 'elife-67409.json.media/fig5-figsupp2.jpg',
      id: '_Vpbgi51AgalACD0t2QAd',
      kind: 'ImageObject',
      index: 9,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_nFOfo1BcxEztX6Yu8E5C',
      kind: 'Link',
      index: 10,
    },
    {
      type: 'File',
      path: '#fig7',
      index: 11,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_p9JhD2hwJNq7YM0omnNS',
      kind: 'Link',
      index: 12,
    },
    {
      type: 'File',
      path: '#fig3s2',
      index: 13,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_jNViud0lpqeJFsGrnHFx',
      kind: 'Link',
      index: 14,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_hwlDsmDaiBy3G8xC47Fr',
      kind: 'Link',
      index: 15,
    },
    {
      type: 'File',
      path: '#fig4s1',
      index: 16,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_A97ZomG4eMTc3qYtV0IW',
      kind: 'ImageObject',
      index: 17,
    },
    {
      type: 'File',
      path: 'elife-67409.json.media/fig3-figsupp2.jpg',
      index: 18,
    },
    {
      type: 'Node',
      path: 'elife-67409.json.media/fig3-figsupp2.jpg',
      id: '_56jrKk5fp5pR4nsoL1JQ',
      kind: 'ImageObject',
      index: 19,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_QEtluNKOXvqcjF2nmCJB',
      kind: 'Link',
      index: 20,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_ZoieID7u1FUY83SZlGPp',
      kind: 'Link',
      index: 21,
    },
    {
      type: 'File',
      path: '#fig5s2',
      index: 22,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_Cb8jdST0MQSYYDA2GCOy',
      kind: 'Link',
      index: 23,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_sVLiZX2KfTXnb17SN4IV',
      kind: 'Link',
      index: 24,
    },
    {
      type: 'File',
      path: '#fig3s1',
      index: 25,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_PB5hogpZAuv023Ph8QsF',
      kind: 'Link',
      index: 26,
    },
    {
      type: 'File',
      path: '#fig5s1',
      index: 27,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_E2K7QI0znt70AbVaSxos',
      kind: 'Link',
      index: 28,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_dOeiQfnRz7h2ZmYOWib0',
      kind: 'Link',
      index: 29,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_DyxiLhBVtJvhqzbg38tW',
      kind: 'Link',
      index: 30,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_SShUz9LYs68ZV5pTtlIN',
      kind: 'ImageObject',
      index: 31,
    },
    {
      type: 'File',
      path: 'elife-67409.json.media/fig7-figsupp1.jpg',
      index: 32,
    },
    {
      type: 'Node',
      path: 'elife-67409.json.media/fig7-figsupp1.jpg',
      id: '_WE3UqPPYLlamzHLmIDLY',
      kind: 'ImageObject',
      index: 33,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_i27YSfwKBxLpYvxJGWAb',
      kind: 'Link',
      index: 34,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_Ia89hHOH2jDLT5h14uut',
      kind: 'Link',
      index: 35,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_5svkhJgxsTMEduOEoNvB',
      kind: 'Link',
      index: 36,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_Evm0xwaADCTK8Om1srHk',
      kind: 'ImageObject',
      index: 37,
    },
    {
      type: 'File',
      path: 'elife-67409.json.media/fig4-figsupp1.jpg',
      index: 38,
    },
    {
      type: 'Node',
      path: 'elife-67409.json.media/fig4-figsupp1.jpg',
      id: '_oLqp5utg9s1rvVYGjT66',
      kind: 'ImageObject',
      index: 39,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_dcObw6nQppayLbIGyOrq',
      kind: 'Link',
      index: 40,
    },
    {
      type: 'File',
      path: '#fig4s2',
      index: 41,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_MhDRXCYanFLJwTz7BjZG',
      kind: 'Link',
      index: 42,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_qmWptspeOGVVaQcjpTru',
      kind: 'Link',
      index: 43,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_pbcXES0WDkyBL8HO6UsH',
      kind: 'Link',
      index: 44,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_dUf8nr1tkHBtaUNWZW4Q',
      kind: 'Link',
      index: 45,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_7dUY9AWfwhyXyBcKiZbg',
      kind: 'Link',
      index: 46,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_yhDpPqVgtZDeCrIZRzGU',
      kind: 'Link',
      index: 47,
    },
    {
      type: 'File',
      path: '#fig4',
      index: 48,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_I8ldAPV9mJcVkwGprgus',
      kind: 'Link',
      index: 49,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_NYGqkQL2PSr0GqoilZFg',
      kind: 'Link',
      index: 50,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_S5LDc6EUyjko4NX6DzwP',
      kind: 'Link',
      index: 51,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_Ei1a4vUNAqGooEFk0SuP',
      kind: 'ImageObject',
      index: 52,
    },
    {
      type: 'File',
      path: 'elife-67409.json.media/fig5-figsupp1.jpg',
      index: 53,
    },
    {
      type: 'Node',
      path: 'elife-67409.json.media/fig5-figsupp1.jpg',
      id: '_sxAmdzUDfab0zWPpYd13',
      kind: 'ImageObject',
      index: 54,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_jTl3lVBD8boQRC0GV2oi',
      kind: 'ImageObject',
      index: 55,
    },
    {
      type: 'File',
      path: 'elife-67409.json.media/fig6-figsupp1.jpg',
      index: 56,
    },
    {
      type: 'Node',
      path: 'elife-67409.json.media/fig6-figsupp1.jpg',
      id: '_seytviw83ejOcTgKTDOP',
      kind: 'ImageObject',
      index: 57,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_qjVMYfDRVIulMUMH3Igv',
      kind: 'Link',
      index: 58,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_cni78TaQb0AelHvNmu6b',
      kind: 'Link',
      index: 59,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_XP8F7l28iMocy3jSSbn3',
      kind: 'Link',
      index: 60,
    },
    {
      type: 'File',
      path: '#fig5',
      index: 61,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_Dts5dSOPpcbREyb8Aqnj',
      kind: 'Link',
      index: 62,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_In4c0PgGryFcXYiHYRhT',
      kind: 'Link',
      index: 63,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_jPBq6euoifYhpk2f4ByM',
      kind: 'Link',
      index: 64,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_JMIjmXpdzRRBjGRbj8Bj',
      kind: 'Link',
      index: 65,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_TphZVXmUzo6LgZgUdfMi',
      kind: 'ImageObject',
      index: 66,
    },
    {
      type: 'File',
      path: 'elife-67409.json.media/fig5.jpg',
      index: 67,
    },
    {
      type: 'Node',
      path: 'elife-67409.json.media/fig5.jpg',
      id: '_8m14JVUi9ExTSgp9eG5N',
      kind: 'ImageObject',
      index: 68,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_28cftUZkyeAOvwCMU052',
      kind: 'Link',
      index: 69,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_MWcehpiSCxq8TPzsXQVq',
      kind: 'Link',
      index: 70,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_NEGRC4esQGDjv0h45Mji',
      kind: 'Link',
      index: 71,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_OjkSF8dZKkjnKyjxIzan',
      kind: 'Link',
      index: 72,
    },
    {
      type: 'File',
      path: '#fig6s1',
      index: 73,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_cHDDDxt1gNSqq3BWttj6',
      kind: 'Link',
      index: 74,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_pHzHI2dMET5n5q54J0Wi',
      kind: 'Link',
      index: 75,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_BCDDm03ydYzaqQTqmMi9',
      kind: 'Link',
      index: 76,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_0IGfSLt9cQfGJz2VNE5A',
      kind: 'Link',
      index: 77,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_yzuCGR9VCflHWSWkkcAJ',
      kind: 'ImageObject',
      index: 78,
    },
    {
      type: 'File',
      path: 'elife-67409.json.media/fig1-figsupp1.jpg',
      index: 79,
    },
    {
      type: 'Node',
      path: 'elife-67409.json.media/fig1-figsupp1.jpg',
      id: '_5XUikNhe97SXTpFE2Zgz',
      kind: 'ImageObject',
      index: 80,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_z3wG58dug3caOSbo2zYc',
      kind: 'Link',
      index: 81,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_NwS37jf803xtcwhTkMJR',
      kind: 'ImageObject',
      index: 82,
    },
    {
      type: 'File',
      path: 'elife-67409.json.media/fig3.jpg',
      index: 83,
    },
    {
      type: 'Node',
      path: 'elife-67409.json.media/fig3.jpg',
      id: '_XbEazcey7dkjGCVWntVC',
      kind: 'ImageObject',
      index: 84,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_Sqa30eBUwKqx6gMQajKa',
      kind: 'Link',
      index: 85,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_Izmw1QLy5Q8EQ1OTcb63',
      kind: 'Link',
      index: 86,
    },
    {
      type: 'File',
      path: '#fig7s1',
      index: 87,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_UQwKCzO04b5SN2rtK2Xx',
      kind: 'ImageObject',
      index: 88,
    },
    {
      type: 'File',
      path: 'elife-67409.json.media/fig4-figsupp2.jpg',
      index: 89,
    },
    {
      type: 'Node',
      path: 'elife-67409.json.media/fig4-figsupp2.jpg',
      id: '_sQoSj8az5hf5P5SMrwI5',
      kind: 'ImageObject',
      index: 90,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_HQHcE3IFjdh4HofBiWl6',
      kind: 'Link',
      index: 91,
    },
    {
      type: 'File',
      path: '#fig1s1',
      index: 92,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_dtyZh493SqBZfJA2NBsz',
      kind: 'Link',
      index: 93,
    },
    {
      type: 'File',
      path: '#fig2',
      index: 94,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_TxaLVxdoZvex6MgrIm8H',
      kind: 'Link',
      index: 95,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_ycjDSd5uvVPPbPdxR2Fq',
      kind: 'Link',
      index: 96,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_70RxOlw3j3UDOWVx61Z2',
      kind: 'Link',
      index: 97,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_okM6Et2jCwmXyKVTxnQA',
      kind: 'Link',
      index: 98,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_ltM0JM4QvYE4T5JHhc63',
      kind: 'Link',
      index: 99,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_QpzgiVy0hL61LKm9gnQB',
      kind: 'Link',
      index: 100,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_pbJrTK5hCk9OwzEloGvP',
      kind: 'Link',
      index: 101,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_9tflarHjzmXhGydI3UIc',
      kind: 'Link',
      index: 102,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_pOqVbTgXSagH4ScQ43kl',
      kind: 'Link',
      index: 103,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_GR2cwTUGmnR7ITiRIdzY',
      kind: 'Link',
      index: 104,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_zq083IbCddQ6lA3743xU',
      kind: 'Link',
      index: 105,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_FrRRkGzIrAMET6je9mUA',
      kind: 'Link',
      index: 106,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_LFMfzbJUXniS8aBMJ36X',
      kind: 'ImageObject',
      index: 107,
    },
    {
      type: 'File',
      path: 'elife-67409.json.media/fig3-figsupp1.jpg',
      index: 108,
    },
    {
      type: 'Node',
      path: 'elife-67409.json.media/fig3-figsupp1.jpg',
      id: '_hCcahHITZ8UULID9vmmd',
      kind: 'ImageObject',
      index: 109,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_GLklq0HZARbp0Ecv2Zca',
      kind: 'ImageObject',
      index: 110,
    },
    {
      type: 'File',
      path: 'elife-67409.json.media/fig4.jpg',
      index: 111,
    },
    {
      type: 'Node',
      path: 'elife-67409.json.media/fig4.jpg',
      id: '_UIirbI2PZtG0BMixxwBF',
      kind: 'ImageObject',
      index: 112,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_pajvLLTtPSQ5QYoLP1Bd',
      kind: 'Link',
      index: 113,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_0g1z7d1PBkOzbzudqyBA',
      kind: 'Link',
      index: 114,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_E5AjFb85LYuyp5QYM5BF',
      kind: 'Link',
      index: 115,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_cTA2zLX5VmAH8vgiocib',
      kind: 'Link',
      index: 116,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_EhoDjls8BcXUAbf5fRCF',
      kind: 'Link',
      index: 117,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_rMD0a71Dcn9aqOdcxBZj',
      kind: 'ImageObject',
      index: 118,
    },
    {
      type: 'File',
      path: 'elife-67409.json.media/fig2.jpg',
      index: 119,
    },
    {
      type: 'Node',
      path: 'elife-67409.json.media/fig2.jpg',
      id: '_dTFj7Agb7PUhTXqU8I1N',
      kind: 'ImageObject',
      index: 120,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_9zr81f3jlbDK8sSH9qLf',
      kind: 'Link',
      index: 121,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_PHX5NTCUO63GzwQE2hau',
      kind: 'Link',
      index: 122,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_zSzCm8tNsYQ7dMxhvVIh',
      kind: 'Link',
      index: 123,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_vw88dgsQNYfgMJVZ7slM',
      kind: 'Link',
      index: 124,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_WRwN13feo718SrJGkohM',
      kind: 'Link',
      index: 125,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_IcIpyc74nDzfHLXlortu',
      kind: 'Link',
      index: 126,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_1ZIy1p1EeYToYGo0uWw4',
      kind: 'Link',
      index: 127,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_8S2LB8rvNVF60yMv8ZxS',
      kind: 'Link',
      index: 128,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_DmYMjzDvwwtDGr4k9NvK',
      kind: 'Link',
      index: 129,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_unAS5ZGE353RundL7fpN',
      kind: 'Link',
      index: 130,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_KI3pYmSdfMFSSRwZUE4D',
      kind: 'ImageObject',
      index: 131,
    },
    {
      type: 'File',
      path: 'elife-67409.json.media/fig6.jpg',
      index: 132,
    },
    {
      type: 'Node',
      path: 'elife-67409.json.media/fig6.jpg',
      id: '_ZfAWmir9Z9xkHZxIjXyO',
      kind: 'ImageObject',
      index: 133,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_uodZ79LyDIWdSl8EAwsV',
      kind: 'Link',
      index: 134,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_DOcYgPMb9Y0wR6nvLDRL',
      kind: 'Link',
      index: 135,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_kydYKl3Q9tKo5SwaDswk',
      kind: 'Link',
      index: 136,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_UihTncCPatlymav4wcai',
      kind: 'Link',
      index: 137,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_jADUMaOlZ8kO456MLhiz',
      kind: 'ImageObject',
      index: 138,
    },
    {
      type: 'File',
      path: 'elife-67409.json.media/fig1.jpg',
      index: 139,
    },
    {
      type: 'Node',
      path: 'elife-67409.json.media/fig1.jpg',
      id: '_YXzdqynX8z9U7tHfWgvp',
      kind: 'ImageObject',
      index: 140,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_yyfjoml0AFqX4p1yl90V',
      kind: 'Link',
      index: 141,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_tWokYn6BdmMxd9MqEOu6',
      kind: 'Link',
      index: 142,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_fAnoH7aCLdx1bA30lEgI',
      kind: 'Link',
      index: 143,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_TRFff2uYqcAmkSYqvHBM',
      kind: 'Link',
      index: 144,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_ex63tUGTpzYnuAfuSv4d',
      kind: 'Link',
      index: 145,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_UKsLJKsP6G0JP4czm3kx',
      kind: 'Link',
      index: 146,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_TwKAwer5mf8XJOjBEhEU',
      kind: 'ImageObject',
      index: 147,
    },
    {
      type: 'File',
      path: 'elife-67409.json.media/fig7.jpg',
      index: 148,
    },
    {
      type: 'Node',
      path: 'elife-67409.json.media/fig7.jpg',
      id: '_eyjTM1HUgwqg7XX8gxgT',
      kind: 'ImageObject',
      index: 149,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_qSG4pQg49mT6PESWy1Dz',
      kind: 'Link',
      index: 150,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_yokxC6L55vKmmhaLX7cS',
      kind: 'Link',
      index: 151,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_gD3UrUUs2N2y6S53hr0V',
      kind: 'Link',
      index: 152,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_OMwHAkKbx7t2qgHYT0sP',
      kind: 'Link',
      index: 153,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_KYsOwo72hKYniWkDsBY4',
      kind: 'Link',
      index: 154,
    },
    {
      type: 'Node',
      path: 'elife-67409.json',
      id: '_WUDGxkwoKBugQovKGfuv',
      kind: 'Link',
      index: 155,
    },
  ],
  edges: [
    {
      from: 1,
      to: 2,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 3,
      to: 4,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 5,
      to: 6,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 8,
      to: 7,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 8,
      to: 9,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 10,
      to: 11,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 12,
      to: 13,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 14,
      to: 2,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 15,
      to: 16,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 18,
      to: 17,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 18,
      to: 19,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 20,
      to: 6,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 21,
      to: 22,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 23,
      to: 4,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 24,
      to: 25,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 26,
      to: 27,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 28,
      to: 27,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 29,
      to: 25,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 30,
      to: 6,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 32,
      to: 31,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 32,
      to: 33,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 34,
      to: 2,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 35,
      to: 2,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 36,
      to: 2,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 38,
      to: 37,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 38,
      to: 39,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 40,
      to: 41,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 42,
      to: 41,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 43,
      to: 6,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 44,
      to: 11,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 45,
      to: 25,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 46,
      to: 27,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 47,
      to: 48,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 49,
      to: 48,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 50,
      to: 25,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 51,
      to: 2,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 53,
      to: 52,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 53,
      to: 54,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 56,
      to: 55,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 56,
      to: 57,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 58,
      to: 6,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 59,
      to: 11,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 60,
      to: 61,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 62,
      to: 11,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 63,
      to: 25,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 64,
      to: 11,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 65,
      to: 2,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 67,
      to: 66,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 67,
      to: 68,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 69,
      to: 2,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 70,
      to: 11,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 71,
      to: 16,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 72,
      to: 73,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 74,
      to: 25,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 75,
      to: 48,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 76,
      to: 6,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 77,
      to: 11,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 79,
      to: 78,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 79,
      to: 80,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 81,
      to: 4,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 83,
      to: 82,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 83,
      to: 84,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 85,
      to: 25,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 86,
      to: 87,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 89,
      to: 88,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 89,
      to: 90,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 91,
      to: 92,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 93,
      to: 94,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 95,
      to: 13,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 96,
      to: 41,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 97,
      to: 92,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 98,
      to: 48,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 99,
      to: 27,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 100,
      to: 73,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 101,
      to: 2,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 102,
      to: 61,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 103,
      to: 27,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 104,
      to: 4,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 105,
      to: 94,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 106,
      to: 25,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 108,
      to: 107,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 108,
      to: 109,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 111,
      to: 110,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 111,
      to: 112,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 113,
      to: 11,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 114,
      to: 48,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 115,
      to: 2,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 116,
      to: 2,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 117,
      to: 2,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 119,
      to: 118,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 119,
      to: 120,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 121,
      to: 4,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 122,
      to: 48,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 123,
      to: 16,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 124,
      to: 87,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 125,
      to: 11,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 126,
      to: 73,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 127,
      to: 4,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 128,
      to: 6,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 129,
      to: 13,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 130,
      to: 92,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 132,
      to: 131,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 132,
      to: 133,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 134,
      to: 41,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 135,
      to: 11,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 136,
      to: 16,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 137,
      to: 4,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 139,
      to: 138,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 139,
      to: 140,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 141,
      to: 16,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 142,
      to: 61,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 143,
      to: 48,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 144,
      to: 61,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 145,
      to: 87,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 146,
      to: 22,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 148,
      to: 147,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 148,
      to: 149,
      relation: {
        type: 'Embed',
      },
    },
    {
      from: 150,
      to: 94,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 151,
      to: 6,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 152,
      to: 6,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 153,
      to: 48,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 154,
      to: 27,
      relation: {
        type: 'Link',
      },
    },
    {
      from: 155,
      to: 87,
      relation: {
        type: 'Link',
      },
    },
  ],
}
